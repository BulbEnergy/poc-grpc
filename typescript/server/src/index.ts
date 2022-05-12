// Run the server
import { createServer, Server } from 'nice-grpc';
import { TariffServiceDefinition } from '../generated/tariff';
import { tariffServiceImpl } from './server';

(async () => {
  const server: Server = createServer();

  server.add(TariffServiceDefinition, tariffServiceImpl);

  await server.listen('127.0.0.1:50051');

  // To shut down gracefully
  // await server.shutdown();
})();
