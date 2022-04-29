import asyncio
import uuid

import grpclib
from betterproto.lib.google.protobuf import FieldMask
from grpclib.client import Channel

from .bulb.tariff.v1 import (
    TariffServiceStub,
    Tariff,
    TariffFeatures,
    Interval,
    FuelType,
    PriceChangeTariffPricePack,
)


async def main() -> None:
    channel = Channel(host="127.0.0.1", port=50051)
    service = TariffServiceStub(channel)

    response = await service.list_tariffs()
    print(response)

    request_id = response.tariffs[0].tariff_id
    tariff_response = await service.get_tariff(tariff_id=request_id)
    print(tariff_response)

    # gRPC errors raise an exception
    try:
        await service.get_tariff(tariff_id="abc")
    except grpclib.GRPCError as e:
        print(e)

    updated_tariff = await service.update_tariff(
        # messages don't _require_ any field to be set; not setting a value is
        # the same as setting the 'default' or 'zero' value
        # https://developers.google.com/protocol-buffers/docs/proto3#default
        # it is _impossible_ to distinguish unset values from zero values!
        tariff=Tariff(
            tariff_id=request_id,
            name="foo",
            features=TariffFeatures(standing_charge_interval=Interval.NEVER),
        ),
        # one way of indicating what fields have been set is a field mask
        # https://netflixtechblog.com/practical-api-design-at-netflix-part-2-protobuf-fieldmask-for-mutation-operations-2e75e1d230e4
        # but betterproto doesn't have a 'merge' function on FieldMask
        # so we'd need to do some implementation work there
        # update_mask=FieldMask(paths=['name', 'features.standing_charge_interval']),
    )
    print(updated_tariff)

    print(await service.list_tariffs())

    # print(await service.batch_get_tariffs())

    # imagine the volume of rates we wanted to fetch was prohibitively large:
    # streaming allows high-volume transfer without the server having to
    # serialise and send all the data at once
    async for price_pack in service.stream_rates_for_tariff(
        tariff_id=request_id,
        fuel_types=[FuelType.ELECTRICITY, FuelType.GAS],
        region_codes=["_A", "_B"],
    ):
        print(price_pack)

    # we can also stream to the server (potentially with an AsyncIterator,
    # though a synchronous generator works fine too)
    await service.stream_update_rates_for_price_change(
        PriceChangeTariffPricePack(
            price_change_id=str(uuid.uuid4()),
            tariff_id=str(uuid.uuid4()),
        )
        for i in range(10)
    )

    # don't forget to close the channel when done!
    channel.close()


if __name__ == "__main__":
    asyncio.run(main())
