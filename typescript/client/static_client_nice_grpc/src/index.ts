import { ClientError, createChannel, createClient, Metadata } from "nice-grpc";
import { credentials } from "@grpc/grpc-js";
import {
  BatchGetTariffsRequest,
  FuelType,
  GetRatesForTariffRequest,
  ListTariffsRequest,
  Tariff,
  TariffServiceClient,
  TariffServiceDefinition,
} from "../generated/tariff";
import { exit } from "process";

const channel = createChannel("127.0.0.1:50051", credentials.createInsecure(), {
  "grpc.keepalive_time_ms": 120000,
  "grpc.http2.min_time_between_pings_ms": 120000,
  "grpc.keepalive_timeout_ms": 20000,
  "grpc.http2.max_pings_without_data": 0,
  "grpc.keepalive_permit_without_calls": 1,
});

const client: TariffServiceClient = createClient(
  TariffServiceDefinition,
  channel
);

async function listAllTariffsInATryCatchWay(): Promise<Tariff[] | void> {
  console.info("\n=====> list all tariffs in a try-catch way");
  const listTariffsRequest: ListTariffsRequest = {};
  const metadata = Metadata({ token: "some-fake-token" });


  try {
    console.time("list_try")
    const response = await client.listTariffs(listTariffsRequest, {
      metadata: metadata,
    });
    console.timeEnd("list_try")
    console.info(response.tariffs);
    return response.tariffs;
  } catch (error) {
    if (error instanceof ClientError) {
      console.error(error);
    }
  }
}

async function listAllTariffsInAPromiseWay(): Promise<void> {
  console.info("\n=====> list all tariffs in a promise way");
  const listTariffsRequest: ListTariffsRequest = {};
  const metadata = Metadata({ token: "some-fake-token" });

  console.time("list_promise")
  await client
    .listTariffs(listTariffsRequest, {
      metadata: metadata,
    })
    .then((response) => {
      console.info(response.tariffs);
    })
    .catch((error) => console.error(error));
  console.timeEnd("list_promise")
}

async function listAllTariffsThenStreamElectricityRatesForOneOfThem(): Promise<void> {
  console.info("\n=====> list all tariffs then stream electricity rates for one of them");
  const tariffs = await listAllTariffsInATryCatchWay();
  if (!tariffs) return

  const tariffIds = tariffs.map((it) => it.tariffId);

  const streamRatesForTariff: GetRatesForTariffRequest = {
    tariffId: tariffIds[0],
    fuelTypes: [FuelType.ELECTRICITY],
    regionCodes: ["D"],
  };

  try {
    console.time("stream")
    for await (const item of client.streamRatesForTariff(
      streamRatesForTariff
    )) {
      console.info(item);
    }
    console.timeEnd("stream")
  } catch (e: unknown) {
    console.error(e);
  }
}

(async () => {
  await listAllTariffsInAPromiseWay();
  await listAllTariffsInATryCatchWay();
  await listAllTariffsThenStreamElectricityRatesForOneOfThem();
  await listAllTariffsInAPromiseWay();

  // clean up
  channel.close()
  exit()
})();
