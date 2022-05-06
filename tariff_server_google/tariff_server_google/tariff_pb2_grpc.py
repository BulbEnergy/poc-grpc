"""Client and server classes corresponding to protobuf-defined services."""
import grpc
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from . import tariff_pb2 as tariff__pb2


class TariffServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListTariffs = channel.unary_unary(
            "/bulb.tariff.v1.TariffService/ListTariffs",
            request_serializer=tariff__pb2.ListTariffsRequest.SerializeToString,
            response_deserializer=tariff__pb2.ListTariffsResponse.FromString,
        )
        self.BatchGetTariffs = channel.unary_unary(
            "/bulb.tariff.v1.TariffService/BatchGetTariffs",
            request_serializer=tariff__pb2.BatchGetTariffsRequest.SerializeToString,
            response_deserializer=tariff__pb2.BatchGetTariffsResponse.FromString,
        )
        self.GetTariff = channel.unary_unary(
            "/bulb.tariff.v1.TariffService/GetTariff",
            request_serializer=tariff__pb2.GetTariffRequest.SerializeToString,
            response_deserializer=tariff__pb2.Tariff.FromString,
        )
        self.UpdateTariff = channel.unary_unary(
            "/bulb.tariff.v1.TariffService/UpdateTariff",
            request_serializer=tariff__pb2.UpdateTariffRequest.SerializeToString,
            response_deserializer=tariff__pb2.Tariff.FromString,
        )
        self.StreamRatesForTariff = channel.unary_stream(
            "/bulb.tariff.v1.TariffService/StreamRatesForTariff",
            request_serializer=tariff__pb2.GetRatesForTariffRequest.SerializeToString,
            response_deserializer=tariff__pb2.PricePack.FromString,
        )
        self.StreamUpdateRatesForPriceChange = channel.stream_unary(
            "/bulb.tariff.v1.TariffService/StreamUpdateRatesForPriceChange",
            request_serializer=tariff__pb2.PriceChangeTariffPricePack.SerializeToString,
            response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )


class TariffServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListTariffs(self, request, context):
        """List the metadata of all of Bulb's tariffs."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def BatchGetTariffs(self, request, context):
        """Filter Bulb's tariffs by IDs, or by one or more metadata features."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def GetTariff(self, request, context):
        """Get a single tariff by its tariff ID."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def UpdateTariff(self, request, context):
        """Update the metadata of a tariff."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def StreamRatesForTariff(self, request, context):
        """(Contrived) Stream the pricing of a tariff from server to client."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def StreamUpdateRatesForPriceChange(self, request_iterator, context):
        """(Contrived) Stream new pricing for a tariff from client to server."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")


def add_TariffServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
        "ListTariffs": grpc.unary_unary_rpc_method_handler(
            servicer.ListTariffs,
            request_deserializer=tariff__pb2.ListTariffsRequest.FromString,
            response_serializer=tariff__pb2.ListTariffsResponse.SerializeToString,
        ),
        "BatchGetTariffs": grpc.unary_unary_rpc_method_handler(
            servicer.BatchGetTariffs,
            request_deserializer=tariff__pb2.BatchGetTariffsRequest.FromString,
            response_serializer=tariff__pb2.BatchGetTariffsResponse.SerializeToString,
        ),
        "GetTariff": grpc.unary_unary_rpc_method_handler(
            servicer.GetTariff,
            request_deserializer=tariff__pb2.GetTariffRequest.FromString,
            response_serializer=tariff__pb2.Tariff.SerializeToString,
        ),
        "UpdateTariff": grpc.unary_unary_rpc_method_handler(
            servicer.UpdateTariff,
            request_deserializer=tariff__pb2.UpdateTariffRequest.FromString,
            response_serializer=tariff__pb2.Tariff.SerializeToString,
        ),
        "StreamRatesForTariff": grpc.unary_stream_rpc_method_handler(
            servicer.StreamRatesForTariff,
            request_deserializer=tariff__pb2.GetRatesForTariffRequest.FromString,
            response_serializer=tariff__pb2.PricePack.SerializeToString,
        ),
        "StreamUpdateRatesForPriceChange": grpc.stream_unary_rpc_method_handler(
            servicer.StreamUpdateRatesForPriceChange,
            request_deserializer=tariff__pb2.PriceChangeTariffPricePack.FromString,
            response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
        ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
        "bulb.tariff.v1.TariffService", rpc_method_handlers
    )
    server.add_generic_rpc_handlers((generic_handler,))


class TariffService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListTariffs(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/bulb.tariff.v1.TariffService/ListTariffs",
            tariff__pb2.ListTariffsRequest.SerializeToString,
            tariff__pb2.ListTariffsResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def BatchGetTariffs(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/bulb.tariff.v1.TariffService/BatchGetTariffs",
            tariff__pb2.BatchGetTariffsRequest.SerializeToString,
            tariff__pb2.BatchGetTariffsResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def GetTariff(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/bulb.tariff.v1.TariffService/GetTariff",
            tariff__pb2.GetTariffRequest.SerializeToString,
            tariff__pb2.Tariff.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def UpdateTariff(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/bulb.tariff.v1.TariffService/UpdateTariff",
            tariff__pb2.UpdateTariffRequest.SerializeToString,
            tariff__pb2.Tariff.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def StreamRatesForTariff(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_stream(
            request,
            target,
            "/bulb.tariff.v1.TariffService/StreamRatesForTariff",
            tariff__pb2.GetRatesForTariffRequest.SerializeToString,
            tariff__pb2.PricePack.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def StreamUpdateRatesForPriceChange(
        request_iterator,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.stream_unary(
            request_iterator,
            target,
            "/bulb.tariff.v1.TariffService/StreamUpdateRatesForPriceChange",
            tariff__pb2.PriceChangeTariffPricePack.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )
