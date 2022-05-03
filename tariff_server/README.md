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
* Unlike JSON, it is not possible to distinguish unset protobuf message fields from their default (zero) values. For example, an int32 field defaults to `0`; there is no distinction between omitting that field and specifying its value as `0`.
  * A workaround for when we want to know whether a field has been set are some of the so-called 'Well Known Types' called _wrapper_ types, `[Primitive]Value`, which use the fact that it _is_ possible to distinguish an unsent sub-message from a message containing only default values. For instance, [google.protobuf.StringValue](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#stringvalue) is a string that can be null. `betterproto` nicely maps these wrappers to `Optional` types (for example `StringValue` is an `Optional[str]`).
  * A potentially powerful convention is 'field masks', a field for indicating which fields of the request should be used in an operation ([especially useful for partial updates](https://netflixtechblog.com/practical-api-design-at-netflix-part-2-protobuf-fieldmask-for-mutation-operations-2e75e1d230e4)). `google.protobuf.field_mask_pb2.FieldMask` has a [MergeMessage](https://googleapis.dev/python/protobuf/latest/google/protobuf/field_mask_pb2.html#google.protobuf.field_mask_pb2.FieldMask.MergeMessage) method, but `betterproto` does not have an equivalent. To make effective (generic) use of `FieldMask`, we'd need to invest the time ourselves to implement a `betterproto` version.
* gRPC requests and responses can contain metadata, similar to HTTP headers — though HTTP/2 makes it possible for the server to send metadata both before and after actually fulfilling the request.
  * Something not in this proof of concept is tracing, whether through `opentelemetry` or something more Datadog-specific. However, this [hopefully isn't too onerous to implement as a `grpclib.Server` wrapper of some kind](https://gist.github.com/vmagamedov/19a29f7a4f8f70d76bbc797a0e994112). This proof of concept does include a basic example of sending and receiving a `correlation_id`, using `grpclib`'s events system plus `contextvars` to get around the fact `betterproto` does not expose `metadata` in either the client or server's function signatures. (This solution does not feel perfect, but is not dissimilar to how `correlation_id`s worked in practice in Platform.)
* `grpclib` provides a [ChannelFor](https://grpclib.readthedocs.io/en/latest/testing.html#grpclib.testing.ChannelFor) helper function for testing its servers which lets us concisely get something similar to the `test_client` fixture we use for Flask/FastAPI in Platform, enabling use of the generated client to prod the RPC methods. See `test_server.py` for an example of this pattern.
  * No example is given here of how to test a _client_, but we could implement a mock server just by partially implementing `TariffServiceBase`.
* TODO compare grpclib+betterproto versus just grpclib versus Google's grpc