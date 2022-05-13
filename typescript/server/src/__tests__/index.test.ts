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

/**
 * Very basic test to show how it might be done
 *
 * Unlike grpclib in Python's betterproto library, there isn't a simple way to run a server in memory for tests
 * See: repo/
 */
describe('gRPC server-client tests', () => {
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

  test('listTariffs returns 2 tariffs', async () => {
    console.log('in test');
    const tariffs = await testClient.listTariffs({});
    expect(tariffs.tariffs.length).toBe(2);
  });
});
