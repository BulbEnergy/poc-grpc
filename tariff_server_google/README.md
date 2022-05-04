```bash
poetry run python -m grpc_tools.protoc \
  -I ../protos \
  --python_out=tariff_server_google \
  --grpc_python_out=tariff_server_google \
  --mypy_out=readable_stubs:tariff_server_google \
  --mypy_grpc_out=tariff_server_google \
  ../protos/tariff.proto

# fix the imports to be relative
# (we'd need to think about where these generated files should go...)
poetry run protol --in-place \
 --python-out tariff_server_google \
 protoc --proto-path ../protos \
 ../protos/tariff.proto
 
poetry run black .
```

## Development notes

* `protoc --python_out ...` not only doesn't generate `.py` files with types, but scarcely generates Python code at all — a lot is happening in some C++ descriptor file processor function. As such we rely heavily on [mypy-protobuf](https://github.com/nipunn1313/mypy-protobuf) (`protoc --mypy_out ... --mypy_grpc_out ...`) to generate `.pyi` files that essentially invent all the
  * Here we use `readable_stubs` to make `tariff_pb2.pyi` a bit less scary, but this [could be vulnerable to name collisions](https://github.com/nipunn1313/mypy-protobuf#readable_stubs).
  * We also use [protoletariat](https://github.com/cpcloud/protoletariat) to make the imports play nice for this example, though this might not be necessary depending on how we want to package the generated code.
* `google.protobuf` has some features that `betterproto` lacks, like the `FieldMask.MergeMessage` method used in the implementation of `UpdateTariff`. However, as is evidenced by the PascalCase names of those methods, Google has little respect for Python conventions or even sane naming of functions — for example the `Timestamp.FromDatetime` method, which mutates the object the method is called on and returns nothing. I imagine this is for memory efficiency or good co-operation with the C++ layer, but it's still gnarly.
* With regards to tracing, `ddtrace` supports gRPC just by using `patch_all()`, according to [this table](https://ddtrace.readthedocs.io/en/stable/), though I have not tested this to see how it works or looks.
* Other things like authentication or correlation ID handling could be setup as [service-side interceptors](https://grpc.github.io/grpc/python/grpc.html#service-side-interceptor). A basic `PrintMetadataInterceptor` is included to demonstrate where this would be wired in.
* In theory the `grpc` package has `asyncio` support: see [the API docs](https://grpc.github.io/grpc/python/grpc_asyncio.html) and [this hello world example](https://github.com/grpc/grpc/tree/master/examples/python/helloworld). However, I was unable to find a way of generating server stubs with the correct types.