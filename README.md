
# Introduction
This is a repo created for an internal presentation to demonstrate some high level concepts of gRPC in Python.

This repo contains:
- A [tariff service protobuf](./protos/tariff.proto) based on the features visible on the [Tariff UI tool wireframe](https://bulbenergy.atlassian.net/wiki/spaces/BENG/pages/2384232678/Tariff+UI+tool).
- A Python gRPC server implementation of `tariff.proto` in `tariff_server/`
- A Python gRPC stub (client) implementation of `tariff.proto` in `tariff_client/`

# Develop

## Step 1: Create a virutalenv and install dependencies

`poetry install`

## Step 2: Generate python types and classes based on account.proto

In `./account_server/account_server` and `./account_client/account_client`, use the following command to generate `account/__init__.py`:

```bash
poetry run python -m grpc_tools.protoc \ 
  -I ../protos \
  --python_betterproto_out=tariff_client \
  ../protos/tariff.proto
```

Rerun this step if you've made changes to the protobuf `account.proto`.

## Step 3: Implement server and client code

The server code lives under `./account_server`, and the stub (client) lives under `./account_client`. 

They can be updated independently of each other in the case of new field or features added in contract.


## Step 4: Start server and client

```bash
poetry run python account_[server|client].py
```


## TODO write section about grpcui
