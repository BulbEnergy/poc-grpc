// create client
import {credentials, ServiceError} from "@grpc/grpc-js";
import {
  GetTariffRequest,
  ListTariffsRequest,
  ListTariffsResponse,
  Tariff,
  TariffServiceClient
} from "../generated/tariff";

export const client = new TariffServiceClient("localhost:50051", credentials.createInsecure())

/**
 * list tariffs
 */
export async function listTariffs(): Promise<Tariff[] | void> {
  const request: ListTariffsRequest = {}

  client.listTariffs(
    request,
    (error: ServiceError | null, response: ListTariffsResponse) => {
      if (error) {
        return console.error('listTariffs error:', error);
      }
      return response.tariffs
    }
  );
}

export async function getTariff(tariffId: string): Promise<Tariff | void> {

  const request: GetTariffRequest = {
    tariffId: tariffId
  };

  client.getTariff(
    request,
    (error: ServiceError | null, response: Tariff) => {
      if (error) {
        return console.error('getTariff error:', error);
      }
    }
  );
}