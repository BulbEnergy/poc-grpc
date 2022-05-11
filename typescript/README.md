# gRPC in Typescript

We investigate how we can work with gRPC in the Typescript world, focusing on the backend.

gRPC uses [Protocol Buffer](https://developers.google.com/protocol-buffers) (widely known as Protobuf) to define a service and their associated types for transporting data between server and client.

Some useful resources to understand gRPC more include [this summary](../../../gRPC-python.md), [DevCru presentation](https://docs.google.com/presentation/d/1a8gHWwjPL0DS4docXKngc9zdWtMsI2dIf1dYiWbOn88/edit#slide=id.gea0dc24466_2_0), the [official site](https://grpc.io) and [official repo](https://github.com/grpc/grpc).

## Folder Structure
- Generated code using [`tariff.proto`](../../../protos/tariff.proto) lives under [`./generated`](./generated)
- Entry point is set to `index.ts`

## Progress So Far

- [`ts-proto`](https://github.com/stephenh/ts-proto) + [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) (See [grpc-node](https://github.com/grpc/grpc-node) for all official node-specific packages)
  - Client - [static_client](./client/static_client)
- [`ts-proto`](https://github.com/stephenh/ts-proto) + [`nice-grpc`](https://github.com/deeplay-io/nice-grpc)
  - Server - [server](./server)
  - Client - [static_client_nice_grpc](./client/static_client_nice_grpc)


Observations
---
### grpc-js
- It's the official library, but generated code isn't particularly idiomatic and nice to use.
- Uses callbacks :(

### ts-proto
- Generates native objects and types
- Many options to make the compiled code works with different js setups (e.g. interop, es2015+)
- Uses [`protobufjs`](https://github.com/protobufjs) underneath to read/write bytes, but has its own implementation of code generation
- Works with different external libraries (e.g. `nice-grpc`, `protobufjs`)
- Generated code looks ergonomic and are native Typescript objects with typing
- No extra `.d.ts` files
- We can pass metadata easily (e.g. we might want to send a bearer token or correlation id with our request)

### nice-grpc
- Built on top of `grpc-js`
- Modern code generation using promises rather than callbacks
- It's _nice_
- We can easily add middlewares to handle metadata, logging, error handling and more easily. On the serverside, there's 4 made available by the people behind `nice-grpc`:
  - [`nice-grpc-client-middleware-deadline`](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-client-middleware-deadline)
  - [`nice-grpc-client-middleware-retry`](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-client-middleware-retry)
  - [`nice-grpc-server-middleware-terminator`](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-server-middleware-terminator)
  - [`nice-grpc-server-health`](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-server-health)
- No field mask implementation, which means we'd have to implement that ourselves / contribute to the project, or use other mechanisms (e.g. sending a fully formed object or have different methods to update different parts)

## Further Investigation
- (Testing) Demonstrate how testing could be done
- 