
# Introduction
This is a repo created for an internal presentation to demonstrate some high level concepts of gRPC in Python.

This repo contains:
- A [tariff service protobuf](./protos/tariff.proto) based on the features visible on the [Tariff UI tool wireframe](https://bulbenergy.atlassian.net/wiki/spaces/BENG/pages/2384232678/Tariff+UI+tool).
- A Python gRPC server implementation of `tariff.proto` in `tariff_server/`
- A Python gRPC stub (client) implementation of `tariff.proto` in `tariff_client/`
- A Typescript gRPC stub (client) implementation of `tariff.proto` in [`typescript/client/static_client`](./typescript/client/static_client)

# Develop (Python)

## Step 1: Create a virutalenv and install dependencies

`poetry install`

## Step 2: Generate python types and classes based on tariff.proto

In `./tariff_server/tariff_server` and `./tariff_client/tariff_client`, use the following command to generate `bulb/tariff/v1/__init__.py`:

```bash
poetry run python -m grpc_tools.protoc \ 
  -I ../protos \
  --python_betterproto_out=tariff_client \
  ../protos/tariff.proto
```

Rerun this step if you've made changes to the protobuf `tariff.proto`.

## Step 3: Implement server and client code

The server code lives under `./tariff_server`, and the stub (client) lives under `./tariff_client`.

They can be updated independently of each other in the case of new field or features added in contract.


## Step 4: Start server and client

`cd` into `./tariff_[server|client]`, then: 

```bash
poetry run python -m tariff_[server|client].[server|client]
```

# Develop (Typescript)
## Step 1: Install yarn packages

`yarn install`

## Step 2: Generate Typescript types

`yarn proto`

## Step 3: Implement server and client code

## Step 4: Build and run code

`yarn start`

# TODO write section about grpcui

# TODO write section about generating docs
- https://github.com/pseudomuto/protoc-gen-doc

