import {
  TariffServiceClient,
  TariffServiceDefinition,
} from '../../generated/tariff';
import {
  Channel,
  ChannelCredentials,
  createChannel,
  createClient,
  createServer,
  Server,
} from 'nice-grpc';
import { tariffServiceImpl } from '../server';
// import getPort from 'get-port'

describe('test suite', () => {
  let testServer: Server;
  let testClient: TariffServiceClient;
  let testChannel: Channel;

  beforeAll(async () => {
    console.log('beforeAll');
    // TODO: use get-port
    //  import getPort from 'get-port'
    //  const address = `localhost:${await getPort}`;

    const address = `localhost:50051`;

    // server
    testServer = createServer();
    testServer.add(TariffServiceDefinition, tariffServiceImpl);
    await testServer.listen(address);

    // client
    testChannel = createChannel(address, ChannelCredentials.createInsecure());
    testClient = createClient(TariffServiceDefinition, testChannel);
  });

  afterAll(async () => {
    console.log('afterAll');
    testChannel.close();
    await testServer.shutdown();
  });

  test('list tariffs return 2 tariffs', async () => {
    console.log('in test');
    const tariffs = await testClient.listTariffs({});
    expect(tariffs.tariffs.length).toBe(2);
  });
});
