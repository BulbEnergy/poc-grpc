import {
  BatchGetTariffsRequest,
  BatchGetTariffsResponse,
  DeepPartial,
  FuelType,
  GetRatesForTariffRequest,
  GetTariffRequest,
  Interval,
  ListTariffsRequest,
  ListTariffsResponse,
  PaymentMethod,
  PriceChangeTariffPricePack,
  PricePack,
  PublicationStatus,
  ServerStreamingMethodResult,
  Tariff,
  TariffServiceDefinition,
  TariffServiceServiceImplementation,
  TariffType,
  Unit,
  UpdateTariffRequest,
} from '../generated/tariff';
import { CallContext } from 'nice-grpc-common';
import { createServer, Server, ServerError, Status } from 'nice-grpc';
import { Empty } from '../generated/google/protobuf/empty';
import { randomUUID } from 'crypto';

/**
 * Some static fake data to get the server going
 */

const TARIFF_ID_1 = randomUUID().toString();
const TARIFF_ID_2 = randomUUID().toString();

const TARIFFS: { [id: string]: DeepPartial<Tariff> } = {
  [TARIFF_ID_1]: {
    tariffId: TARIFF_ID_1,
    name: 'EV Tariff',
    fuelTypes: [FuelType.ELECTRICITY],
    paymentMethod: PaymentMethod.DIRECT_DEBIT,
    tariffType: TariffType.VARIABLE,
    publicationStatus: PublicationStatus.DRAFT,
    availableFrom: new Date(Date.UTC(2022, 6, 1)),
    availableTo: new Date(Date.UTC(2023, 6, 1)),
    features: {
      rateStartTimes: ['02:00', '06:00'],
      standingChargeInterval: Interval.DAILY,
    },
    legacyReference: 'EV2R-V01-201216',
  },
  [TARIFF_ID_2]: {
    tariffId: TARIFF_ID_2,
    name: 'Pay Monthly Variable',
    fuelTypes: [FuelType.ELECTRICITY, FuelType.GAS],
    paymentMethod: PaymentMethod.DIRECT_DEBIT,
    tariffType: TariffType.VARIABLE,
    publicationStatus: PublicationStatus.LIVE,
    availableFrom: new Date(Date.UTC(2022, 2, 1)),
    features: {
      rateStartTimes: [],
      standingChargeInterval: Interval.DAILY,
    },
  },
};

const PRICE_CHANGE_DATETIMES = [
  new Date(Date.UTC(2020, 1, 1)),
  new Date(Date.UTC(2021, 1, 1)),
  new Date(Date.UTC(2022, 1, 1)),
];

/**
 * Server implementation
 * - Errors are thrown using "ServerError" class
 * - Responses are automatically wrapped in DeepPartial
 */
export const tariffServiceImpl: TariffServiceServiceImplementation = {
  async batchGetTariffs(
    request: BatchGetTariffsRequest,
    context: CallContext,
  ): Promise<DeepPartial<BatchGetTariffsResponse>> {
    if (request.tariffIds) {
      if (request.fuelTypes || request.tariffTypes) {
        throw new ServerError(
          Status.INVALID_ARGUMENT,
          'requesting ids is not compatible with filtering by fuelTypes or tariffTypes',
        );
      }
      return {
        tariffs: Object.values(TARIFFS).filter((tariff: Tariff) => {
          request.tariffIds.includes(tariff.tariffId);
        }),
      };
    }

    if (request.fuelTypes || request.tariffTypes) {
      return {
        tariffs: Object.assign([], TARIFFS)
          .filter((tariff: Tariff) => {
            !request.fuelTypes ||
              (new Set(tariff.fuelTypes) && new Set(request.fuelTypes));
          })
          .filter((tariff: Tariff) => {
            !request.tariffTypes ||
              request.tariffTypes.includes(tariff.tariffType);
          }),
      };
    } else {
      throw new ServerError(
        Status.INVALID_ARGUMENT,
        'one of ids, fuelTypes or tariffTypes must be provided',
      );
    }
  },

  async getTariff(
    request: GetTariffRequest,
    context: CallContext,
  ): Promise<DeepPartial<Tariff>> {
    const requestedTariff = TARIFFS[request.tariffId];
    if (!requestedTariff) {
      throw new ServerError(
        Status.NOT_FOUND,
        `cannot find ${request.tariffId}`,
      );
    }
    return requestedTariff;
  },

  async listTariffs(
    request: ListTariffsRequest,
    context: CallContext,
  ): Promise<DeepPartial<ListTariffsResponse>> {
    return { tariffs: Object.values(TARIFFS) };
  },

  /**
   * Server stream method yields results as an async iterator
   */
  async *streamRatesForTariff(
    request: GetRatesForTariffRequest,
    context: CallContext,
  ): ServerStreamingMethodResult<DeepPartial<PricePack>> {
    if (!request.fuelTypes || !request.regionCodes) {
      throw new ServerError(
        Status.INVALID_ARGUMENT,
        'fuelTypes and regionCodes are required',
      );
    }

    let tariff: DeepPartial<Tariff>;
    try {
      tariff = TARIFFS[request.tariffId];
    } catch (error) {
      throw new ServerError(
        Status.NOT_FOUND,
        `Cannot find tariff ${request.tariffId}`,
      );
    }

    const rateStartTimes = tariff.features.rateStartTimes || ['00:00'];

    for (let i = 0; i < PRICE_CHANGE_DATETIMES.length; i++) {
      for (const fuelType of request.fuelTypes) {
        for (const regionCode of request.regionCodes) {
          yield {
            regionCode: regionCode,
            fuelType: fuelType,
            existingMembersEffectiveAt: PRICE_CHANGE_DATETIMES[i],
            newMembersEffectiveAt: PRICE_CHANGE_DATETIMES[i],
            unitRates: rateStartTimes.map((rateStartTime) => {
              return {
                cents: 20 + i,
                unit: Unit.KWH,
                rateStartTime: rateStartTime,
              };
            }),
            standingCharge: {
              cents: 1000 + i,
              interval: Interval.DAILY,
            },
          };
        }
      }
    }
  },

  async streamUpdateRatesForPriceChange(
    request: AsyncIterable<PriceChangeTariffPricePack>,
    context: CallContext,
  ): Promise<DeepPartial<Empty>> {
    for await (const pctpp of request) {
      console.log(pctpp);
    }
    return Empty;
  },

  async updateTariff(
    request: UpdateTariffRequest,
    context: CallContext,
  ): Promise<DeepPartial<Tariff>> {
    // We'll need to implement our own field mask handler if we wanted to use field masks
    // TODO: investigate if protobufjs will help with this. It has mergePartial
    //  see: https://github.com/timostamm/protobuf-ts/blob/master/MANUAL.md#imessagetype
    if (!Object.keys(TARIFFS).includes(request.tariff.tariffId)) {
      throw new ServerError(
        Status.NOT_FOUND,
        `Cannot find ${request.tariff.tariffId}`,
      );
    }

    if (request.updateMask) {
      throw new ServerError(
        Status.UNIMPLEMENTED,
        "There isn't a way to use field masks with nice-proto",
      );
    }

    return request.tariff;
  },
};
