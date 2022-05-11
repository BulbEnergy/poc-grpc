
# Server

Libraries:
- [`ts-proto`](https://github.com/stephenh/ts-proto)
- [`nice-grpc`](https://github.com/deeplay-io/nice-grpc)

##  Code Generation

We use the official [`grpc-tools`](https://github.com/grpc/grpc-node/tree/master/packages/grpc-tools) package (which is the official `protoc` protobuf compiler underneath) with the [`ts-proto`](https://github.com/stephenh/ts-proto) plugin. This allows us to generate native Typescript types for use based on a given protobuf.

The `yarn proto` command is mapped to:

```bash
yarn grpc_tools_node_protoc \
--ts_proto_out=./generated \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
--proto_path ../../protos \
../../protos/tariff.proto
```

This output all generated code to [`./generated`](./generated)

## Running the Client
1. `yarn install` - install all required packages
2. `yarn start` - build using `tsc` and run using `ts-node`

You can use the Python gRPC server for demo purposes for now. You can refer to the [Python gRPC server README](../../../tariff_server/README.md) for instructions for spinning it up