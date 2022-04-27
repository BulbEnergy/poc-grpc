import asyncio

import grpclib
from betterproto.lib.google.protobuf import FieldMask
from grpclib.client import Channel

from bulb.tariff import TariffServiceStub, Tariff, TariffFeatures, Interval


async def main():
    channel = Channel(host="127.0.0.1", port=50051)
    service = TariffServiceStub(channel)
    response = await service.list_tariffs()
    print(response)

    request_id = response.tariffs[0].id
    tariff_response = await service.get_tariff(id=request_id)
    print(tariff_response)

    try:
        tariff_non_exist_response = await service.get_tariff(id="abc")
    except grpclib.GRPCError as e:
        print(e)

    updated_tariff = await service.update_tariff(
        tariff=Tariff(
            id=request_id,
            name='foo',
            blah=0,
            # features=TariffFeatures(standing_charge_interval=Interval.NEVER),
        ),
        # update_mask=FieldMask(paths=['name', 'features.standing_charge_interval']),
    )
    breakpoint()
    print(updated_tariff)
    print(await service.list_tariffs())

    print(await service.batch_get_tariffs())

    # don't forget to close the channel when done!
    channel.close()


if __name__ == "__main__":
    asyncio.run(main())
