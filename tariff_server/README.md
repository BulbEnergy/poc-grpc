## Running instructions

### Step 1: Create a virutalenv and install dependencies

* Install [Poetry](https://python-poetry.org/)
* `poetry install`

### Step 2: Generate python types and classes based on tariff.proto

```bash
poetry run python -m grpc_tools.protoc \ 
  -I ../protos \
  --python_betterproto_out=tariff_server --python_out=tariff_server \
  ../protos/tariff.proto
```

Rerun this step if you've made changes to the protobuf `tariff.proto`.

### Step 4: Start the server

```bash
poetry run python -m tariff_server.server
```


### Step 5: Interact with the server

You can run the `tariff_client`, or use

* [grpcurl](https://github.com/fullstorydev/grpcurl)
```bash
grpcurl -plaintext 127.0.0.1:50051 list
grpcurl -plaintext 127.0.0.1:50051 describe bulb.tariff.v1.TariffService
grpcurl -plaintext 127.0.0.1:50051 bulb.tariff.v1.TariffService.ListTariffs
```

* [grpcui](https://github.com/fullstorydev/grpcui)
```bash
grpcui -plaintext 127.0.0.1:50051
# your browser might auto-open it, otherwise visit the URL printed to stdout
```

## Development notes

* The gRPC service is implemented by subclassing the generated `bulb.tariff.v1.TariffServiceBase` class and overriding its methods, then providing that service class to the `grpclib.Server`.
  * If our requirements evolved such that we wanted to publish a `v2` API, we could implement and run the `v1` and `v2` services side-by-side.
* The reflection endpoints used by tools like `grpcurl` are provided by `grpclib.reflection.service.ServerReflection`.
  * Unfortunately, `grpclib`'s reflection depends on `protoc`'s default Python output (`tariff_pb2.py`) to provide message definitions. This means this server requires both `protoc --python_out` and `protoc --python_betterproto_out` to function.
* `grpclib` has some neat support for implementing a health check service, which we could use in conjunction with [grpc-health-probe](https://github.com/grpc-ecosystem/grpc-health-probe/) to implement liveness/readiness checks for the Kubernetes deployment. (This [won't require a separate tool in Kubernetes v1.23](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-grpc-liveness-probe), but that version is still in alpha.)
* `betterproto` implements responding with gRPC errors by raising a `grpclib.GRPCError`. This nicely mirrors `betterproto` clients, which will raise a `grpclib.GRPCError` exception if a call returns a gRPC error.
* Something not in this proof of concept is tracing, whether through `opentelemetry` or something more Datadog-specific. Like with Flask, we might have to wire something together ourselves for this (because we're outside of Google's walled garden by using `grpclib`). However, this [hopefully isn't too onerous to implement as a `grpclib.Server` wrapper of some kind](https://gist.github.com/vmagamedov/19a29f7a4f8f70d76bbc797a0e994112), since gRPC calls allow arbitrary metadata to be attached to requests.
  * A similar pattern of using contextvars.ContextVar could be used to pass a `correlation_id` in the metadata of gRPC requests.