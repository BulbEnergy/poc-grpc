## Running instructions

### Step 1: Create a virutalenv and install dependencies

* Install [Poetry](https://python-poetry.org/)
* `poetry install`

### Step 2: Generate python types and classes based on tariff.proto

```bash
poetry run python -m grpc_tools.protoc \ 
  -I ../protos \
  --python_betterproto_out=tariff_client \
  ../protos/tariff.proto
```

Rerun this step if you've made changes to the protobuf `tariff.proto`.

### Step 4: Start the server

```bash
poetry run python -m tariff_client.client
```

## Development notes

To be written.
