
# Server

Libraries:
- [`ts-proto`](https://github.com/stephenh/ts-proto)
- [`nice-grpc`](https://github.com/deeplay-io/nice-grpc)

See [typescript/README.md](../README.md) for more details on these packages

## Code Generation

We use the official [`grpc-tools`](https://github.com/grpc/grpc-node/tree/master/packages/grpc-tools) package (which is the official `protoc` protobuf compiler underneath) with the [`ts-proto`](https://github.com/stephenh/ts-proto) plugin. This allows us to generate native Typescript types for use based on a given protobuf.

The `yarn proto` command is mapped to:

```bash
yarn grpc_tools_node_protoc \
--descriptor_set_out=./generated/protoset.bin --include_imports \
--ts_proto_out=./generated \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
--proto_path ../../protos ../../protos/tariff.proto
```

This output all generated code to [`./generated`](./generated)

## Running the server
1. `yarn install` - install all required packages (ensure you've set up to use [Bulb's artifactory](https://bulbenergy.atlassian.net/wiki/spaces/BENG/pages/1175191577/Set+up+yarn+to+use+Artifactory#npm-or-yarn-fail-in-other-repositories))
    - I found that I needed to set yarn to use the registry explicitly by running `yarn config set registry https://bulbenergy.jfrog.io/bulbenergy/api/npm/npm/`
2. `yarn start` - build using `tsc` and run using `ts-node`

The server is served on localhost, port 50051

## Running tests
`yarn test`
