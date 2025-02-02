import {
  ClientError,
  createChannel,
  createClient,
  Metadata,
} from 'nice-grpc';
import { credentials } from '@grpc/grpc-js';
import {
  DeepPartial,
  FuelType,
  GetRatesForTariffRequest,
  ListTariffsRequest,
  PriceChangeTariffPricePack,
  Tariff,
  TariffServiceClient,
  TariffServiceDefinition,
} from '../generated/tariff';
import { exit } from 'process';
import { randomUUID } from 'crypto';

/**
 * Create a channel to the Tariff Service server
 */
const channel = createChannel('127.0.0.1:50051', credentials.createInsecure(),
  //{
  // example configurations
  // 'grpc.keepalive_time_ms': 120000,
  // 'grpc.http2.min_time_between_pings_ms': 120000,
  // 'grpc.keepalive_timeout_ms': 20000,
  // 'grpc.http2.max_pings_without_data': 0,
  // 'grpc.keepalive_permit_without_calls': 1,
//}
);

function handleError(error: unknown) {
  if (error instanceof ClientError) {
    console.error('gRPC error:', error);
  } else {
    console.error('Other error:', error);
  }
}

/**
 * Create Tariff Service client with the channel above
 */
const client: TariffServiceClient = createClient(
  TariffServiceDefinition,
  channel,
);

/**
 * Use try-catch to handle an async call to list all tariffs
 */
async function listAllTariffsInATryCatchWay(): Promise<Tariff[] | void> {
  console.info('\n=====> list all tariffs in a try-catch way');
  const listTariffsRequest: ListTariffsRequest = {};
  const metadata = Metadata({ token: 'some-fake-token' });

  try {
    console.time('list_try');
    const response = await client.listTariffs(listTariffsRequest, {
      metadata: metadata,
    });
    console.timeEnd('list_try');
    console.info(response.tariffs);
    return response.tariffs;
  } catch (error) {
    handleError(error);
  }
}

/**
 * Get Tariff given a tariff id
 *
 * @param tariffId tariff id
 */
async function getTariffById(tariffId: string) {
  console.info('\n=====> Get tariff by id');
  try {
    await client.getTariff({ tariffId: tariffId });
  } catch (error: unknown) {
    handleError(error);
  }
}

/**
 * Use Promise to handle an async call to list all tariffs
 */
async function listAllTariffsInAPromiseWay(): Promise<void> {
  console.info('\n=====> list all tariffs in a promise way');
  const listTariffsRequest: ListTariffsRequest = {};
  const metadata = Metadata({ token: 'some-fake-token' });

  console.time('list_promise');
  await client
    .listTariffs(listTariffsRequest, {
      metadata: metadata,
    })
    .then((response) => {
      console.info(response.tariffs);
    })
    .catch((error) => console.error(error));
  console.timeEnd('list_promise');
}

/**
 * A server streaming call to stream PricePack's from server one by one
 */
async function listAllTariffsThenStreamElectricityRatesForOneOfThem(): Promise<void> {
  console.info(
    '\n=====> list all tariffs then stream electricity rates for one of them',
  );
  const tariffs = await listAllTariffsInATryCatchWay();

  if (!tariffs) return;
  const tariffIds = tariffs.map((it) => it.tariffId);

  // "request body"
  const streamRatesForTariff: GetRatesForTariffRequest = {
    tariffId: tariffIds[0],
    fuelTypes: [FuelType.ELECTRICITY],
    regionCodes: ['D'],
  };

  // stream rates
  try {
    console.time('stream');
    for await (const item of client.streamRatesForTariff(
      streamRatesForTariff,
    )) {
      console.info(item);
    }
    console.timeEnd('stream');
  } catch (e: unknown) {
    console.error(e);
  }
}

/**
 * Generate PriceChangeTariffPricePack's
 * @param count The number of objects to create
 */
async function* generatePriceChangeTariffPricePack(
  count: number,
): AsyncIterable<DeepPartial<PriceChangeTariffPricePack>> {
  // fromPartial enables us to create a partial object
  for (let i = 0; i < count; i++) {
    yield {
      priceChangeId: randomUUID(),
      tariffId: randomUUID(),
    };
  }
}

/**
 * A client streaming call that streams a list of PriceChangeTariffPricePack objects to the server
 */
async function streamUpdateRatesForPriceChange(): Promise<void> {
  console.time('stream_update');
  await client.streamUpdateRatesForPriceChange(
    generatePriceChangeTariffPricePack(10),
  );
  console.timeEnd('stream_update');
}

(async () => {
  // there's a cost establishing a channel connection. By reusing it, subsequent calls are significantly faster, as they are multiplexed on through the same HTTP/2 connection

  // unary calls
  await listAllTariffsInAPromiseWay();
  await listAllTariffsInATryCatchWay();

  // unary calls - error handled
  await getTariffById('fakeId');

  // server stream call
  await listAllTariffsThenStreamElectricityRatesForOneOfThem();
  // client stream call
  await streamUpdateRatesForPriceChange();

  // clean up
  // TODO: Python server throws this after calling client streaming function
  //  Maybe we missed something about closing the stream somewhere?
  //  Also tried waiting for 10 seconds with:
  //  await new Promise(resolve => setTimeout(resolve, 10000));
  // Fatal error: protocol.data_received() call failed.
  // protocol: <grpclib.protocol.H2Protocol object at 0x10dc91ed0>
  // transport: <_SelectorSocketTransport closing fd=7 read=idle write=<idle, bufsize=0>>
  // Traceback (most recent call last):
  //   File "/Users/alanlau/.pyenv/versions/3.10.1/Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/asyncio/selector_events.py", line 870, in _read_ready__data_received
  //     self._protocol.data_received(data)
  //   File "/Users/alanlau/Library/Caches/pypoetry/virtualenvs/tariff-server-UZTV9Bb3-py3.10/lib/python3.10/site-packages/grpclib/protocol.py", line 719, in data_received
  //     self.processor.process(event)
  //   File "/Users/alanlau/Library/Caches/pypoetry/virtualenvs/tariff-server-UZTV9Bb3-py3.10/lib/python3.10/site-packages/grpclib/protocol.py", line 564, in process
  //     proc = self.processors[event.__class__]
  // AttributeError: 'EventsProcessor' object has no attribute 'processors'

  channel.close();
  exit();
})();
