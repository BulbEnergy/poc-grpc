from typing import AsyncGenerator, cast, AsyncIterator

import pytest
from grpclib.client import Channel
from grpclib.testing import ChannelFor
from tariff_server.server import TariffService

from tariff_server.bulb.tariff.v1 import TariffServiceStub


@pytest.fixture
async def server_channel() -> AsyncIterator[Channel]:
    async with ChannelFor([TariffService()]) as channel:
        yield channel


@pytest.fixture
async def test_client(server_channel: Channel) -> AsyncIterator[TariffServiceStub]:
    yield TariffServiceStub(server_channel)
