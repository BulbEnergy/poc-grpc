
# Introduction
This is a repo created for an internal presentation to demonstrate some high level concepts of gRPC in Python.

This repo contains:
- A [tariff service protobuf](./protos/tariff.proto) based on the features visible on the [Tariff UI tool wireframe](https://bulbenergy.atlassian.net/wiki/spaces/BENG/pages/2384232678/Tariff+UI+tool).
- A [Python gRPC server implementation](./tariff_server/README.md) of `tariff.proto` using `grpclib` and `betterproto`
- A [Python gRPC server implementation](./tariff_server_google/README.md) of `tariff.proto` using `grpc/grpc`
- A [Python gRPC stub (client) implementation](./tariff_client/README.md) of `tariff.proto` using `grpclib` and `betterproto`

See the `README.md`s inside each implementation for how to run them, and some implementation notes.
- `tariff_server/README.md` is the best place to start.
