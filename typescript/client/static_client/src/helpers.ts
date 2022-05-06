// create client
import {credentials, Metadata, ServiceError} from "@grpc/grpc-js";
import {
  GetTariffRequest,
  ListTariffsRequest,
  ListTariffsResponse,
  Tariff,
  TariffServiceClient,
} from "../generated/tariff";
import {promisify} from "util";

export const client = new TariffServiceClient(
  "localhost:50051",
  credentials.createInsecure(),
  {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
  }
);

export const metadata = new Metadata();
metadata.add("token", "some-fake-token");

/**
 * List and get tariff in a callback manner
 *
 * @returns Promise<string[]> tariff ids
 */
export function listAndGetTariffCallback(): void {
  const request: ListTariffsRequest = {};

  client.listTariffs(
    request,
    async (error: ServiceError | null, response: ListTariffsResponse) => {
      // handle error
      if (error) {
        return console.error("listTariffs error:", error);
      }

      // do something with the response
      const tariffs = response.tariffs;
      console.info(tariffs);

      // maybe other things
      await getTariffCallback(tariffs[0].tariffId);
      await getTariffCallback("doesNotExistId");
    }
  );
}

/**
 * Get tariff using tariff id ina a callback manner
 *
 * @param tariffId Tariff ID to retrieve
 */
async function getTariffCallback(tariffId: string): Promise<void> {
  const request: GetTariffRequest = {
    tariffId: tariffId,
  };

  client.getTariff(request, (error: ServiceError | null, response: Tariff) => {
    console.info("======> getTariff");
    if (error) {
      return console.error("getTariff error:", error);
    }
    console.info("getTariffCallback:", response);
  });
}

/**
 * List tariffs using promise
 */
export async function listTariffs(): Promise<ListTariffsResponse> {
  const request: ListTariffsRequest = {};
  return promisify<ListTariffsRequest, Metadata, ListTariffsResponse>(
    client.listTariffs
  ).bind(client)(request, metadata);
}

/**
 * Get tariff using a provided tariffId
 * @param tariffId
 */
export async function getTariff(tariffId: string): Promise<Tariff> {
  const request: GetTariffRequest = {
    tariffId: tariffId,
  };
  return promisify<GetTariffRequest, Metadata, Tariff>(client.getTariff).bind(
    client
  )(request, metadata);
}