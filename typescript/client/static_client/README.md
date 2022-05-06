
# gRPC in Typescript

We investigate how we can work with gRPC in the Typescript world, focusing on the backend.

gRPC uses [Protocol Buffer](https://developers.google.com/protocol-buffers) (widely known as Protobuf) to define a service and their associated types for transporting data between server and client.

Some useful resources to understand gRPC more include [this summary](../../../gRPC-python.md), [DevCru presentation](https://docs.google.com/presentation/d/1a8gHWwjPL0DS4docXKngc9zdWtMsI2dIf1dYiWbOn88/edit#slide=id.gea0dc24466_2_0), the [official site](https://grpc.io) and [official repo](https://github.com/grpc/grpc).

## Folder Structure
- Generated code using [`tariff.proto`](../../../protos/tariff.proto) lives under [`./generated`](./generated)
- Client code lives under [`./src`](./src)

## Progress So Far

---

- (Client) Demonstrate how it might work using [`ts-proto`](https://github.com/stephenh/ts-proto) targeting the official [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) library (See [grpc-node](https://github.com/grpc/grpc-node) for all official node-specific packages)

----

- Pros
  - Generated code looks ergonomic and are native Typescript objects with typing
  - No extra `.d.ts` files
  - We can pass metadata easily (e.g. we might want to send a bearer token or correlation id with our request)
- Cons
  - Targeting `grpc-js` means it generates very old style Node code (callbacks...). We should explore something like [`nice-grpc`](https://github.com/deeplay-io/nice-grpc) for out-of-the-box promise-style code, instead of having to manually `promisify` them

## Further Investigation
- (Server) Implement a gRPC server in Typescript
- (Client / Server) Try out [`nice-grpc`](https://github.com/deeplay-io/nice-grpc) for more modern code generation (promises rather than callbacks...)
- (Testing) Demonstrate how testing could be done

# Code Generation

We use the official [`grpc-tools`](https://github.com/grpc/grpc-node/tree/master/packages/grpc-tools) package (which is the official `protoc` protobuf compiler underneath) with the [`ts-proto`](https://github.com/stephenh/ts-proto) plugin. This allows us to generate native Typescript types for use based on a given protobuf.

The `yarn proto` command is mapped to:

```bash
yarn grpc_tools_node_protoc \
--ts_proto_out=./generated \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=outputServices=grpc-js \
--ts_proto_opt=esModuleInterop=true \
--proto_path ../../../protos \
../../../protos/tariff.proto
```

# Running the Client
1. `yarn install` - install all required packages
2. `yarn start` - build using `tsc` and run using `ts-node`

You can use the Python gRPC server for demo purposes for now. You can refer to the [Python gRPC server README](../../../tariff_server/README.md) for instructions for spinning it up