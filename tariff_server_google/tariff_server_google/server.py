import typing
import uuid
from concurrent import futures
from datetime import datetime

import google.protobuf
import google.protobuf.empty_pb2
import grpc
from dateutil.tz import UTC
from google.protobuf.timestamp_pb2 import Timestamp
from google.protobuf.wrappers_pb2 import StringValue
from grpc_reflection.v1alpha import reflection

from .tariff_pb2 import (
    Tariff,
    FuelType,
    PaymentMethod,
    TariffType,
    PublicationStatus,
    TariffFeatures,
    Interval,
)
from . import tariff_pb2, tariff_pb2_grpc


TARIFF_ID_1 = str(uuid.uuid4())
TARIFF_ID_2 = str(uuid.uuid4())


# for some reason Google thinks FromDatetime should be a method that mutates
# an existing instance. *butterfly meme* is this Java?
def timestamp_from_datetime(dt: datetime) -> Timestamp:
    ts = Timestamp()
    ts.FromDatetime(dt)
    return ts


TARIFFS: dict[str, Tariff] = {
    TARIFF_ID_1: Tariff(
        tariff_id=TARIFF_ID_1,
        name="EV Tariff",
        fuel_types=[FuelType.ELECTRICITY],
        payment_method=PaymentMethod.DIRECT_DEBIT,
        tariff_type=TariffType.VARIABLE,
        publication_status=PublicationStatus.DRAFT,
        available_from=timestamp_from_datetime(datetime(2022, 6, 1, tzinfo=UTC)),
        available_to=timestamp_from_datetime(datetime(2023, 6, 1, tzinfo=UTC)),
        features=TariffFeatures(
            rate_start_times=["02:00", "06:00"],
            standing_charge_interval=Interval.DAILY,
        ),
        legacy_reference=StringValue(value="EV2R-V01-201216"),
    ),
    TARIFF_ID_2: Tariff(
        tariff_id=TARIFF_ID_2,
        name="Pay Monthly Variable",
        fuel_types=[FuelType.ELECTRICITY, FuelType.GAS],
        payment_method=PaymentMethod.DIRECT_DEBIT,
        tariff_type=TariffType.VARIABLE,
        publication_status=PublicationStatus.LIVE,
        available_from=timestamp_from_datetime(datetime(2022, 2, 1, tzinfo=UTC)),
        features=TariffFeatures(
            # rate_start_times=[],
            standing_charge_interval=Interval.DAILY,
        ),
    ),
}

PRICE_CHANGE_DATETIMES = [
    datetime(2020, 1, 1, tzinfo=UTC),
    datetime(2021, 1, 1, tzinfo=UTC),
    datetime(2022, 1, 1, tzinfo=UTC),
]


class TariffServiceServicer(tariff_pb2_grpc.TariffServiceServicer):
    def ListTariffs(
        self, request: tariff_pb2.ListTariffsRequest, context: grpc.ServicerContext
    ) -> tariff_pb2.ListTariffsResponse:
        print(context.invocation_metadata())
        return tariff_pb2.ListTariffsResponse(tariffs=list(TARIFFS.values()))

    def BatchGetTariffs(
        self, request: tariff_pb2.BatchGetTariffsRequest, context: grpc.ServicerContext
    ) -> tariff_pb2.BatchGetTariffsResponse:
        if request.tariff_ids:
            if request.fuel_types or request.tariff_types:
                context.abort(
                    grpc.StatusCode.INVALID_ARGUMENT,
                    "requesting ids is not compatible with filtering by fuel_types or tariff_types",
                )
            return tariff_pb2.BatchGetTariffsResponse(
                tariffs=[TARIFFS[tariff_id] for tariff_id in request.tariff_ids]
            )
        if request.fuel_types or request.tariff_types:
            return tariff_pb2.BatchGetTariffsResponse(
                tariffs=[
                    tariff
                    for tariff in TARIFFS.values()
                    if (
                        not request.fuel_types
                        or (set(tariff.fuel_types) & set(request.fuel_types))
                    )
                    and (
                        not request.tariff_types
                        or tariff.tariff_type in request.tariff_types
                    )
                ]
            )
        else:
            context.abort(
                grpc.StatusCode.INVALID_ARGUMENT,
                "one of ids, fuel_types or tariff_types must be provided",
            )

    def GetTariff(
        self, request: tariff_pb2.GetTariffRequest, context: grpc.ServicerContext
    ) -> tariff_pb2.Tariff:
        try:
            return TARIFFS[request.tariff_id]
        except KeyError:
            context.abort(grpc.StatusCode.NOT_FOUND, f"cannot find {request.tariff_id}")

    def UpdateTariff(
        self, request: tariff_pb2.UpdateTariffRequest, context: grpc.ServicerContext
    ) -> tariff_pb2.Tariff:
        if request.tariff.tariff_id not in TARIFFS:
            context.abort(
                grpc.StatusCode.NOT_FOUND, f"cannot find {request.tariff.tariff_id}"
            )
        if request.update_mask:
            existing_tariff = TARIFFS[request.tariff.tariff_id]
            # mutate existing_tariff according to the request's field mask
            # (no, I don't know why these helper functions are in PascalCase)
            request.update_mask.MergeMessage(
                source=request.tariff,
                destination=existing_tariff,
                replace_repeated_field=True,  # the default would concatenate the lists
            )
            return existing_tariff
        else:
            # if there's no mask, just replace the whole tariff
            # (whether an API _should_ offer this is a complex question)
            TARIFFS[request.tariff.tariff_id] = request.tariff
        return request.tariff

    def StreamRatesForTariff(
        self,
        request: tariff_pb2.GetRatesForTariffRequest,
        context: grpc.ServicerContext,
    ) -> typing.Iterator[tariff_pb2.PricePack]:
        if not request.fuel_types or not request.region_codes:
            context.abort(
                grpc.StatusCode.INVALID_ARGUMENT,
                "fuel_types and region_codes are required",
            )

        try:
            tariff = TARIFFS[request.tariff_id]
        except KeyError:
            context.abort(grpc.StatusCode.NOT_FOUND, f"cannot find {request.tariff_id}")

        rate_start_times = tariff.features.rate_start_times or ["00:00"]

        # in a real application we might iterate over database results
        # (still avoiding needing to have all the rates in-memory at once)
        for idx, dt in enumerate(PRICE_CHANGE_DATETIMES):
            for fuel_type in request.fuel_types:
                for region_code in request.region_codes:
                    yield tariff_pb2.PricePack(
                        region_code=region_code,
                        fuel_type=fuel_type,
                        existing_members_effective_at=timestamp_from_datetime(dt),
                        new_members_effective_at=timestamp_from_datetime(dt),
                        unit_rates=[
                            tariff_pb2.UnitRate(
                                cents=20 + idx,
                                unit=tariff_pb2.Unit.KWH,
                                start_time=rate_start_time,
                            )
                            for rate_start_time in rate_start_times
                        ],
                        standing_charge=tariff_pb2.StandingCharge(
                            cents=1000 + idx,
                            interval=Interval.DAILY,
                        ),
                    )

    def StreamUpdateRatesForPriceChange(
        self,
        request_iterator: typing.Iterator[tariff_pb2.PriceChangeTariffPricePack],
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty:
        for pctpp in request_iterator:
            print(pctpp)
        return google.protobuf.empty_pb2.Empty()


class PrintMetadataInterceptor(grpc.ServerInterceptor):
    """Demonstration interceptor that prints metadata sent by the client."""

    def intercept_service(
        self,
        continuation: typing.Callable[
            [grpc.HandlerCallDetails], typing.Optional[grpc.RpcMethodHandler]
        ],
        handler_call_details: grpc.HandlerCallDetails,
    ) -> grpc.RpcMethodHandler:
        print(handler_call_details.invocation_metadata)
        return continuation(handler_call_details)


def serve():
    server = grpc.server(
        thread_pool=futures.ThreadPoolExecutor(max_workers=10),
        interceptors=[PrintMetadataInterceptor()],
    )
    tariff_pb2_grpc.add_TariffServiceServicer_to_server(TariffServiceServicer(), server)
    reflection.enable_server_reflection(
        [
            tariff_pb2.DESCRIPTOR.services_by_name["TariffService"].full_name,
            reflection.SERVICE_NAME,
        ],
        server,
    )
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
