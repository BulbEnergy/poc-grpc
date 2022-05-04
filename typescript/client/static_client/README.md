
## Packages

- Service and Stub generation
  - grpc-tools
- TypeScript type generation
  - grpc_tools_node_protoc_ts
  - ts-proto
- 

```bash
yarn grpc_tools_node_protoc \
--ts_proto_out=. \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=outputServices=grpc-js \
--proto_path ../../../protos \
../../../protos/tariff.proto
```

`rxjs` (Observable and map) required for streams

1. `yarn install`
2. `yarn build`
3. `yarn start`
