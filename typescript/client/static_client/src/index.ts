import {client, getTariff, listTariffs, metadata} from "./helpers";
import {FuelType, GetRatesForTariffRequest, PricePack} from "../generated/tariff";
import {closeClient, ServiceError} from "@grpc/grpc-js";
import { exit } from "process";

// entry point
(async () => {
  // listTariffs
  // await listTariffsCallback()


  console.info("=====> list all tariffs and get tariff using an existing id")
  await listTariffs()
    .then((response) => {
      const tariffs = response.tariffs;
      console.info(tariffs);
      return tariffs;
    })
    .then((tariffs) => {
      return getTariff(tariffs[0].tariffId);
      // return getTariff("fakeId");
    })
    .then((tariff) => {
      console.info(tariff);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("")


  console.info("=====> list all tariffs and get non-existing tariff afterwards")
  await listTariffs()
    .then((response) => {
      const tariffs = response.tariffs;
      console.info(tariffs);
      return tariffs;
    })
    .then((tariffs) => {
      return getTariff("non-existing");
    })
    .then((tariff) => {
      console.info(tariff);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("")


  console.info("=====> get non-existing tariff")
  await getTariff("fakeId")
    .then((tariff) => {
      console.info(tariff)
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("")

  console.info("=====> stream rates of a tariff")
  const streamRatesForTariffRequest: GetRatesForTariffRequest = {
    tariffId: "ee6d497a-379d-4aad-8844-91d323d4172d",
    fuelTypes: [FuelType.ELECTRICITY, FuelType.GAS],
    regionCodes: ["D"],
  }
  client.streamRatesForTariff(streamRatesForTariffRequest, metadata)
    .on("data", (pricePack: PricePack) => {
      const fuelType = FuelType[pricePack.fuelType]
      console.info(`Stream Price Pack (${fuelType}):`, pricePack)
    })
    .on("end", () => {
      console.info("Done")
    })
    .on("error", (error: ServiceError) => { console.error(error) })
  console.log("")
})();
