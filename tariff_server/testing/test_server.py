from tariff_server.bulb.tariff.v1 import TariffServiceStub


async def test_list_tariffs(test_client: TariffServiceStub) -> None:
    resp = await test_client.list_tariffs()
    assert len(resp.tariffs) == 2


async def test_update_tariff(test_client: TariffServiceStub) -> None:
    resp = await test_client.list_tariffs()
    tariff_one = resp.tariffs[0]
    tariff_one.name = "New name"
    updated_tariff = await test_client.update_tariff(tariff=tariff_one)
    assert updated_tariff == tariff_one
    fetched_tariff = await test_client.get_tariff(tariff_id=tariff_one.tariff_id)
    assert fetched_tariff == tariff_one
