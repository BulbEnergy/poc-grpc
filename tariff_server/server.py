import asyncio
import uuid
from datetime import datetime

from dateutil.tz import UTC
from grpclib.reflection.service import ServerReflection
from grpclib.server import Server

from bulb.tariff import TariffServiceBase, Tariff, ListTariffsResponse, BatchGetTariffsResponse, \
    PaymentMethod, TariffType, PublicationStatus, TariffFeatures, Interval
from betterproto.lib.google.protobuf import FieldMask

# Tariff(
#     id="",
#     name="",
#     fuel_types="",
#     payment_method="",
#     tariff_type="",
#     publication_status="",
#     available_from="",
#     available_to="",
#     features="",
# )

TARIFF_ID_1 = str(uuid.uuid4())
TARIFF_ID_2 = str(uuid.uuid4())

TARIFFS = {
    TARIFF_ID_1: Tariff(
        id=TARIFF_ID_1,
        name="EV Tariff",
        fuel_types=[],
        payment_method=PaymentMethod.DIRECT_DEBIT,
        tariff_type=TariffType.VARIABLE,
        publication_status=PublicationStatus.DRAFT,
        available_from=datetime(2022, 6, 1, tzinfo=UTC),
        available_to=datetime(2023, 6, 1, tzinfo=UTC),
        features=TariffFeatures(
            rate_start_times=["02:00", "06:00"],
            standing_charge_interval=Interval.DAILY,
        ),
    ),
    TARIFF_ID_2: Tariff(
        id=TARIFF_ID_2,
        name="Vari Fair",
        fuel_types=[],
        payment_method=PaymentMethod.DIRECT_DEBIT,
        tariff_type=TariffType.VARIABLE,
        publication_status=PublicationStatus.LIVE,
        available_from=datetime(2022, 2, 1, tzinfo=UTC),
        features=TariffFeatures(
            # rate_start_times=[],
            standing_charge_interval=Interval.DAILY,
        ),
    ),
}


class TariffService(TariffServiceBase):
    async def list_tariffs(self) -> ListTariffsResponse:
        return ListTariffsResponse(tariffs=list(TARIFFS.values()))

    async def batch_get_tariffs(
            self,
            ids: list[str] | None,
            references: list[str] | None,
            fuel_types: list[str] | None,
            tariff_types: list[str] | None,
    ) -> BatchGetTariffsResponse:
        ...

    async def get_tariff(self, id: str) -> Tariff:
        return TARIFFS[id]

    async def update_tariff(
        self, tariff: Tariff, update_mask: FieldMask
    ) -> Tariff:
        ...


async def main():
    services = [TariffService()]
    services = ServerReflection.extend(services)
    print(services)
    server = Server(services)
    await server.start("127.0.0.1", 50051)
    await server.wait_closed()


if __name__ == "__main__":
    asyncio.run(main())
