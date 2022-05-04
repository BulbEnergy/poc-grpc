import {listTariffs} from "./helpers";
import {Tariff} from "../generated/tariff";


(async () => {
  // listTariffs
  const tariffs: Tariff[] | void = await listTariffs()

  if (tariffs) {
    console.log(tariffs)
  }
  //
  // // getTariff using id
  // const
})();
