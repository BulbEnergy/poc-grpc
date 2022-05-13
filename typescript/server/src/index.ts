// Run the server
import { createServer, Server } from 'nice-grpc';
import { TariffServiceDefinition } from '../generated/tariff';
import { tariffServiceImpl } from './server';
import { metadataMiddleware } from './middlewares';
import {
  ServerReflection,
  ServerReflectionService,
} from 'nice-grpc-server-reflection';
import * as fs from 'fs';
import path from 'path';

/**
 * Entry point
 */
(async () => {
  const server: Server = createServer().use(metadataMiddleware);

  server.add(TariffServiceDefinition, tariffServiceImpl);

  server.add(
    ServerReflectionService,
    ServerReflection(
      fs.readFileSync(path.join(__dirname, '..', 'generated', 'protoset.bin')),
      [TariffServiceDefinition.fullName],
    ),
  );

  await server.listen('127.0.0.1:50051');

  // To shut down gracefully
  // Consider using nice-grpc-server-middleware-terminator:
  // https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-server-middleware-terminator
  // await server.shutdown();
})();
