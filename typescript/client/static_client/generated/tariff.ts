/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  handleServerStreamingCall,
  handleClientStreamingCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ClientReadableStream,
  ClientWritableStream,
  ServiceError,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { Empty } from "./google/protobuf/empty";
import { StringValue } from "./google/protobuf/wrappers";

export const protobufPackage = "bulb.tariff.v1";

export enum FuelType {
  UNKNOWN_FUEL = 0,
  ELECTRICITY = 1,
  GAS = 2,
  UNRECOGNIZED = -1,
}

export function fuelTypeFromJSON(object: any): FuelType {
  switch (object) {
    case 0:
    case "UNKNOWN_FUEL":
      return FuelType.UNKNOWN_FUEL;
    case 1:
    case "ELECTRICITY":
      return FuelType.ELECTRICITY;
    case 2:
    case "GAS":
      return FuelType.GAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FuelType.UNRECOGNIZED;
  }
}

export function fuelTypeToJSON(object: FuelType): string {
  switch (object) {
    case FuelType.UNKNOWN_FUEL:
      return "UNKNOWN_FUEL";
    case FuelType.ELECTRICITY:
      return "ELECTRICITY";
    case FuelType.GAS:
      return "GAS";
    default:
      return "UNKNOWN";
  }
}

export enum TariffType {
  UNKNOWN_TARIFF = 0,
  VARIABLE = 1,
  FIXED = 2,
  UNRECOGNIZED = -1,
}

export function tariffTypeFromJSON(object: any): TariffType {
  switch (object) {
    case 0:
    case "UNKNOWN_TARIFF":
      return TariffType.UNKNOWN_TARIFF;
    case 1:
    case "VARIABLE":
      return TariffType.VARIABLE;
    case 2:
    case "FIXED":
      return TariffType.FIXED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TariffType.UNRECOGNIZED;
  }
}

export function tariffTypeToJSON(object: TariffType): string {
  switch (object) {
    case TariffType.UNKNOWN_TARIFF:
      return "UNKNOWN_TARIFF";
    case TariffType.VARIABLE:
      return "VARIABLE";
    case TariffType.FIXED:
      return "FIXED";
    default:
      return "UNKNOWN";
  }
}

export enum PublicationStatus {
  UNKNOWN_STATUS = 0,
  UNDER_CONSTRUCTION = 1,
  DRAFT = 2,
  LIVE = 3,
  ARCHIVED = 4,
  UNRECOGNIZED = -1,
}

export function publicationStatusFromJSON(object: any): PublicationStatus {
  switch (object) {
    case 0:
    case "UNKNOWN_STATUS":
      return PublicationStatus.UNKNOWN_STATUS;
    case 1:
    case "UNDER_CONSTRUCTION":
      return PublicationStatus.UNDER_CONSTRUCTION;
    case 2:
    case "DRAFT":
      return PublicationStatus.DRAFT;
    case 3:
    case "LIVE":
      return PublicationStatus.LIVE;
    case 4:
    case "ARCHIVED":
      return PublicationStatus.ARCHIVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PublicationStatus.UNRECOGNIZED;
  }
}

export function publicationStatusToJSON(object: PublicationStatus): string {
  switch (object) {
    case PublicationStatus.UNKNOWN_STATUS:
      return "UNKNOWN_STATUS";
    case PublicationStatus.UNDER_CONSTRUCTION:
      return "UNDER_CONSTRUCTION";
    case PublicationStatus.DRAFT:
      return "DRAFT";
    case PublicationStatus.LIVE:
      return "LIVE";
    case PublicationStatus.ARCHIVED:
      return "ARCHIVED";
    default:
      return "UNKNOWN";
  }
}

export enum PaymentMethod {
  UNKNOWN_PAYMENT_METHOD = 0,
  /** DIRECT_DEBIT - ... */
  DIRECT_DEBIT = 1,
  UNRECOGNIZED = -1,
}

export function paymentMethodFromJSON(object: any): PaymentMethod {
  switch (object) {
    case 0:
    case "UNKNOWN_PAYMENT_METHOD":
      return PaymentMethod.UNKNOWN_PAYMENT_METHOD;
    case 1:
    case "DIRECT_DEBIT":
      return PaymentMethod.DIRECT_DEBIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentMethod.UNRECOGNIZED;
  }
}

export function paymentMethodToJSON(object: PaymentMethod): string {
  switch (object) {
    case PaymentMethod.UNKNOWN_PAYMENT_METHOD:
      return "UNKNOWN_PAYMENT_METHOD";
    case PaymentMethod.DIRECT_DEBIT:
      return "DIRECT_DEBIT";
    default:
      return "UNKNOWN";
  }
}

export enum Interval {
  UNKNOWN_INTERVAL = 0,
  NEVER = 1,
  /** DAILY - ... */
  DAILY = 2,
  UNRECOGNIZED = -1,
}

export function intervalFromJSON(object: any): Interval {
  switch (object) {
    case 0:
    case "UNKNOWN_INTERVAL":
      return Interval.UNKNOWN_INTERVAL;
    case 1:
    case "NEVER":
      return Interval.NEVER;
    case 2:
    case "DAILY":
      return Interval.DAILY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Interval.UNRECOGNIZED;
  }
}

export function intervalToJSON(object: Interval): string {
  switch (object) {
    case Interval.UNKNOWN_INTERVAL:
      return "UNKNOWN_INTERVAL";
    case Interval.NEVER:
      return "NEVER";
    case Interval.DAILY:
      return "DAILY";
    default:
      return "UNKNOWN";
  }
}

export enum Unit {
  UNKNOWN_UNIT = 0,
  KWH = 1,
  UNRECOGNIZED = -1,
}

export function unitFromJSON(object: any): Unit {
  switch (object) {
    case 0:
    case "UNKNOWN_UNIT":
      return Unit.UNKNOWN_UNIT;
    case 1:
    case "KWH":
      return Unit.KWH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Unit.UNRECOGNIZED;
  }
}

export function unitToJSON(object: Unit): string {
  switch (object) {
    case Unit.UNKNOWN_UNIT:
      return "UNKNOWN_UNIT";
    case Unit.KWH:
      return "KWH";
    default:
      return "UNKNOWN";
  }
}

export interface ListTariffsRequest {}

export interface ListTariffsResponse {
  tariffs: Tariff[];
}

export interface BatchGetTariffsRequest {
  tariffIds: string[];
  fuelTypes: string[];
  tariffTypes: TariffType[];
}

export interface BatchGetTariffsResponse {
  tariffs: Tariff[];
}

export interface GetTariffRequest {
  tariffId: string;
}

export interface UpdateTariffRequest {
  /** google.protobuf.FieldMask update_mask = 2; */
  tariff: Tariff | undefined;
}

export interface GetRatesForTariffRequest {
  tariffId: string;
  fuelTypes: FuelType[];
  regionCodes: string[];
}

export interface PriceChangeTariffPricePack {
  priceChangeId: string;
  tariffId: string;
  pricePack: PricePack | undefined;
}

export interface Tariff {
  /** the UUID of the tariff */
  tariffId: string;
  /** the human-readable name for the tariff (can change) */
  name: string;
  /**
   * which fuel types this tariff is applicable to
   * (it will have prices for every fuel listed here)
   */
  fuelTypes: FuelType[];
  /**
   * what payment method this tariff is for
   * (a filter on where this tariff is used)
   */
  paymentMethod: PaymentMethod;
  /** whether the tariff is variable or fixed */
  tariffType: TariffType;
  /** whether the tariff is under construction, or in draft, or live */
  publicationStatus: PublicationStatus;
  /** when the tariff begins being available to members */
  availableFrom: Date | undefined;
  /** (optional) when the tariff ceases being available to members */
  availableTo?: Date | undefined;
  /** a description of features enabled for the tariff */
  features: TariffFeatures | undefined;
  /** the original short reference for this tariff in Junifer (if any) */
  legacyReference: string | undefined;
}

export interface TariffFeatures {
  /**
   * all the times of day when rates start
   * there are as many rates as there are entries in this list
   * e.g. ['02:00', '06:00'] for an EV tariff
   */
  rateStartTimes: string[];
  /** the regularity at which the member is charged the standing charge */
  standingChargeInterval: Interval;
}

/**
 * Prices for a single region and fuel type, starting from a date.
 * A PricePack is flexible and requires validation to 'fit' in a tariff.
 */
export interface PricePack {
  /** in UK this is a GSP group */
  regionCode: string;
  /** which fuel type these are prices for */
  fuelType: FuelType;
  /** when these prices starts affecting existing members */
  existingMembersEffectiveAt: Date | undefined;
  /** when these prices starts affecting new members */
  newMembersEffectiveAt: Date | undefined;
  /**
   * the price of energy for each time interval described in TariffFeatures
   * in order, e.g. if the rate_start_times are ['02:00', '06:00']
   * - there are exactly two unit_rates
   * - the first unit_rates item is the price for 02:00-06:00
   * - the second unit_rates item is the price for 06:00-02:00
   */
  unitRates: UnitRate[];
  /**
   * the standing charge that applies to every meter this tariff covers
   * (if we discover we want multiple StandingCharges
   * we can change this to 'repeated' without breaking wire compatibility
   * but old clients would only 'see' the last one in the list)
   */
  standingCharge?: StandingCharge | undefined;
}

export interface UnitRate {
  /** cents per unit (e.g. pence per kWh) */
  cents: number;
  /** unit of energy */
  unit: Unit;
  /**
   * empty for single rate, otherwise when in the day the rate starts applying
   * e.g. '02:00'
   */
  startTime?: string | undefined;
}

export interface StandingCharge {
  /** cents per interval */
  cents: number;
  /** the regularity at which the member is charged the standing charge */
  interval: Interval;
}

export interface PriceChange {
  /** the UUID of the price change */
  priceChangeId: string;
  /** when the price change was created */
  createdAt: Date | undefined;
  /** when the price changes (if published) starts affecting existing members */
  existingMembersEffectiveAt: Date | undefined;
  /** when the price changes (if published) starts affecting new members */
  newMembersEffectiveAt: Date | undefined;
  /**
   * when the price change was published
   * (if it hasn't got a published_at, it's in draft)
   */
  publishedAt?: Date | undefined;
  /** what reviews have been requested and their status */
  reviews: Review[];
  /** how much progress has been made with applying the published price change */
  orchestrationSteps: OrchestrationSteps | undefined;
}

export interface Review {
  reviewer: string;
  approved: boolean;
}

export interface OrchestrationSteps {
  juniferUpdated: boolean;
  pcwsUpdated: boolean;
  commsSent: boolean;
  payReviewCompleted: boolean;
}

function createBaseListTariffsRequest(): ListTariffsRequest {
  return {};
}

export const ListTariffsRequest = {
  encode(
    _: ListTariffsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTariffsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTariffsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListTariffsRequest {
    return {};
  },

  toJSON(_: ListTariffsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTariffsRequest>, I>>(
    _: I
  ): ListTariffsRequest {
    const message = createBaseListTariffsRequest();
    return message;
  },
};

function createBaseListTariffsResponse(): ListTariffsResponse {
  return { tariffs: [] };
}

export const ListTariffsResponse = {
  encode(
    message: ListTariffsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tariffs) {
      Tariff.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTariffsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTariffsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariffs.push(Tariff.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTariffsResponse {
    return {
      tariffs: Array.isArray(object?.tariffs)
        ? object.tariffs.map((e: any) => Tariff.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListTariffsResponse): unknown {
    const obj: any = {};
    if (message.tariffs) {
      obj.tariffs = message.tariffs.map((e) =>
        e ? Tariff.toJSON(e) : undefined
      );
    } else {
      obj.tariffs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTariffsResponse>, I>>(
    object: I
  ): ListTariffsResponse {
    const message = createBaseListTariffsResponse();
    message.tariffs = object.tariffs?.map((e) => Tariff.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchGetTariffsRequest(): BatchGetTariffsRequest {
  return { tariffIds: [], fuelTypes: [], tariffTypes: [] };
}

export const BatchGetTariffsRequest = {
  encode(
    message: BatchGetTariffsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tariffIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.fuelTypes) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.tariffTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BatchGetTariffsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchGetTariffsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariffIds.push(reader.string());
          break;
        case 3:
          message.fuelTypes.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tariffTypes.push(reader.int32() as any);
            }
          } else {
            message.tariffTypes.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchGetTariffsRequest {
    return {
      tariffIds: Array.isArray(object?.tariffIds)
        ? object.tariffIds.map((e: any) => String(e))
        : [],
      fuelTypes: Array.isArray(object?.fuelTypes)
        ? object.fuelTypes.map((e: any) => String(e))
        : [],
      tariffTypes: Array.isArray(object?.tariffTypes)
        ? object.tariffTypes.map((e: any) => tariffTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchGetTariffsRequest): unknown {
    const obj: any = {};
    if (message.tariffIds) {
      obj.tariffIds = message.tariffIds.map((e) => e);
    } else {
      obj.tariffIds = [];
    }
    if (message.fuelTypes) {
      obj.fuelTypes = message.fuelTypes.map((e) => e);
    } else {
      obj.fuelTypes = [];
    }
    if (message.tariffTypes) {
      obj.tariffTypes = message.tariffTypes.map((e) => tariffTypeToJSON(e));
    } else {
      obj.tariffTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchGetTariffsRequest>, I>>(
    object: I
  ): BatchGetTariffsRequest {
    const message = createBaseBatchGetTariffsRequest();
    message.tariffIds = object.tariffIds?.map((e) => e) || [];
    message.fuelTypes = object.fuelTypes?.map((e) => e) || [];
    message.tariffTypes = object.tariffTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseBatchGetTariffsResponse(): BatchGetTariffsResponse {
  return { tariffs: [] };
}

export const BatchGetTariffsResponse = {
  encode(
    message: BatchGetTariffsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tariffs) {
      Tariff.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BatchGetTariffsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchGetTariffsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariffs.push(Tariff.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchGetTariffsResponse {
    return {
      tariffs: Array.isArray(object?.tariffs)
        ? object.tariffs.map((e: any) => Tariff.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchGetTariffsResponse): unknown {
    const obj: any = {};
    if (message.tariffs) {
      obj.tariffs = message.tariffs.map((e) =>
        e ? Tariff.toJSON(e) : undefined
      );
    } else {
      obj.tariffs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchGetTariffsResponse>, I>>(
    object: I
  ): BatchGetTariffsResponse {
    const message = createBaseBatchGetTariffsResponse();
    message.tariffs = object.tariffs?.map((e) => Tariff.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetTariffRequest(): GetTariffRequest {
  return { tariffId: "" };
}

export const GetTariffRequest = {
  encode(
    message: GetTariffRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tariffId !== "") {
      writer.uint32(10).string(message.tariffId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTariffRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTariffRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariffId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTariffRequest {
    return {
      tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
    };
  },

  toJSON(message: GetTariffRequest): unknown {
    const obj: any = {};
    message.tariffId !== undefined && (obj.tariffId = message.tariffId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTariffRequest>, I>>(
    object: I
  ): GetTariffRequest {
    const message = createBaseGetTariffRequest();
    message.tariffId = object.tariffId ?? "";
    return message;
  },
};

function createBaseUpdateTariffRequest(): UpdateTariffRequest {
  return { tariff: undefined };
}

export const UpdateTariffRequest = {
  encode(
    message: UpdateTariffRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tariff !== undefined) {
      Tariff.encode(message.tariff, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTariffRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTariffRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariff = Tariff.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTariffRequest {
    return {
      tariff: isSet(object.tariff) ? Tariff.fromJSON(object.tariff) : undefined,
    };
  },

  toJSON(message: UpdateTariffRequest): unknown {
    const obj: any = {};
    message.tariff !== undefined &&
      (obj.tariff = message.tariff ? Tariff.toJSON(message.tariff) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTariffRequest>, I>>(
    object: I
  ): UpdateTariffRequest {
    const message = createBaseUpdateTariffRequest();
    message.tariff =
      object.tariff !== undefined && object.tariff !== null
        ? Tariff.fromPartial(object.tariff)
        : undefined;
    return message;
  },
};

function createBaseGetRatesForTariffRequest(): GetRatesForTariffRequest {
  return { tariffId: "", fuelTypes: [], regionCodes: [] };
}

export const GetRatesForTariffRequest = {
  encode(
    message: GetRatesForTariffRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tariffId !== "") {
      writer.uint32(10).string(message.tariffId);
    }
    writer.uint32(18).fork();
    for (const v of message.fuelTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.regionCodes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRatesForTariffRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRatesForTariffRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariffId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fuelTypes.push(reader.int32() as any);
            }
          } else {
            message.fuelTypes.push(reader.int32() as any);
          }
          break;
        case 3:
          message.regionCodes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRatesForTariffRequest {
    return {
      tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
      fuelTypes: Array.isArray(object?.fuelTypes)
        ? object.fuelTypes.map((e: any) => fuelTypeFromJSON(e))
        : [],
      regionCodes: Array.isArray(object?.regionCodes)
        ? object.regionCodes.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetRatesForTariffRequest): unknown {
    const obj: any = {};
    message.tariffId !== undefined && (obj.tariffId = message.tariffId);
    if (message.fuelTypes) {
      obj.fuelTypes = message.fuelTypes.map((e) => fuelTypeToJSON(e));
    } else {
      obj.fuelTypes = [];
    }
    if (message.regionCodes) {
      obj.regionCodes = message.regionCodes.map((e) => e);
    } else {
      obj.regionCodes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRatesForTariffRequest>, I>>(
    object: I
  ): GetRatesForTariffRequest {
    const message = createBaseGetRatesForTariffRequest();
    message.tariffId = object.tariffId ?? "";
    message.fuelTypes = object.fuelTypes?.map((e) => e) || [];
    message.regionCodes = object.regionCodes?.map((e) => e) || [];
    return message;
  },
};

function createBasePriceChangeTariffPricePack(): PriceChangeTariffPricePack {
  return { priceChangeId: "", tariffId: "", pricePack: undefined };
}

export const PriceChangeTariffPricePack = {
  encode(
    message: PriceChangeTariffPricePack,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.priceChangeId !== "") {
      writer.uint32(10).string(message.priceChangeId);
    }
    if (message.tariffId !== "") {
      writer.uint32(18).string(message.tariffId);
    }
    if (message.pricePack !== undefined) {
      PricePack.encode(message.pricePack, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PriceChangeTariffPricePack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceChangeTariffPricePack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceChangeId = reader.string();
          break;
        case 2:
          message.tariffId = reader.string();
          break;
        case 3:
          message.pricePack = PricePack.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceChangeTariffPricePack {
    return {
      priceChangeId: isSet(object.priceChangeId)
        ? String(object.priceChangeId)
        : "",
      tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
      pricePack: isSet(object.pricePack)
        ? PricePack.fromJSON(object.pricePack)
        : undefined,
    };
  },

  toJSON(message: PriceChangeTariffPricePack): unknown {
    const obj: any = {};
    message.priceChangeId !== undefined &&
      (obj.priceChangeId = message.priceChangeId);
    message.tariffId !== undefined && (obj.tariffId = message.tariffId);
    message.pricePack !== undefined &&
      (obj.pricePack = message.pricePack
        ? PricePack.toJSON(message.pricePack)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceChangeTariffPricePack>, I>>(
    object: I
  ): PriceChangeTariffPricePack {
    const message = createBasePriceChangeTariffPricePack();
    message.priceChangeId = object.priceChangeId ?? "";
    message.tariffId = object.tariffId ?? "";
    message.pricePack =
      object.pricePack !== undefined && object.pricePack !== null
        ? PricePack.fromPartial(object.pricePack)
        : undefined;
    return message;
  },
};

function createBaseTariff(): Tariff {
  return {
    tariffId: "",
    name: "",
    fuelTypes: [],
    paymentMethod: 0,
    tariffType: 0,
    publicationStatus: 0,
    availableFrom: undefined,
    availableTo: undefined,
    features: undefined,
    legacyReference: undefined,
  };
}

export const Tariff = {
  encode(
    message: Tariff,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tariffId !== "") {
      writer.uint32(10).string(message.tariffId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.fuelTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.paymentMethod !== 0) {
      writer.uint32(32).int32(message.paymentMethod);
    }
    if (message.tariffType !== 0) {
      writer.uint32(40).int32(message.tariffType);
    }
    if (message.publicationStatus !== 0) {
      writer.uint32(48).int32(message.publicationStatus);
    }
    if (message.availableFrom !== undefined) {
      Timestamp.encode(
        toTimestamp(message.availableFrom),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.availableTo !== undefined) {
      Timestamp.encode(
        toTimestamp(message.availableTo),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.features !== undefined) {
      TariffFeatures.encode(
        message.features,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.legacyReference !== undefined) {
      StringValue.encode(
        { value: message.legacyReference! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tariff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTariff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tariffId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fuelTypes.push(reader.int32() as any);
            }
          } else {
            message.fuelTypes.push(reader.int32() as any);
          }
          break;
        case 4:
          message.paymentMethod = reader.int32() as any;
          break;
        case 5:
          message.tariffType = reader.int32() as any;
          break;
        case 6:
          message.publicationStatus = reader.int32() as any;
          break;
        case 7:
          message.availableFrom = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.availableTo = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.features = TariffFeatures.decode(reader, reader.uint32());
          break;
        case 10:
          message.legacyReference = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tariff {
    return {
      tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      fuelTypes: Array.isArray(object?.fuelTypes)
        ? object.fuelTypes.map((e: any) => fuelTypeFromJSON(e))
        : [],
      paymentMethod: isSet(object.paymentMethod)
        ? paymentMethodFromJSON(object.paymentMethod)
        : 0,
      tariffType: isSet(object.tariffType)
        ? tariffTypeFromJSON(object.tariffType)
        : 0,
      publicationStatus: isSet(object.publicationStatus)
        ? publicationStatusFromJSON(object.publicationStatus)
        : 0,
      availableFrom: isSet(object.availableFrom)
        ? fromJsonTimestamp(object.availableFrom)
        : undefined,
      availableTo: isSet(object.availableTo)
        ? fromJsonTimestamp(object.availableTo)
        : undefined,
      features: isSet(object.features)
        ? TariffFeatures.fromJSON(object.features)
        : undefined,
      legacyReference: isSet(object.legacyReference)
        ? String(object.legacyReference)
        : undefined,
    };
  },

  toJSON(message: Tariff): unknown {
    const obj: any = {};
    message.tariffId !== undefined && (obj.tariffId = message.tariffId);
    message.name !== undefined && (obj.name = message.name);
    if (message.fuelTypes) {
      obj.fuelTypes = message.fuelTypes.map((e) => fuelTypeToJSON(e));
    } else {
      obj.fuelTypes = [];
    }
    message.paymentMethod !== undefined &&
      (obj.paymentMethod = paymentMethodToJSON(message.paymentMethod));
    message.tariffType !== undefined &&
      (obj.tariffType = tariffTypeToJSON(message.tariffType));
    message.publicationStatus !== undefined &&
      (obj.publicationStatus = publicationStatusToJSON(
        message.publicationStatus
      ));
    message.availableFrom !== undefined &&
      (obj.availableFrom = message.availableFrom.toISOString());
    message.availableTo !== undefined &&
      (obj.availableTo = message.availableTo.toISOString());
    message.features !== undefined &&
      (obj.features = message.features
        ? TariffFeatures.toJSON(message.features)
        : undefined);
    message.legacyReference !== undefined &&
      (obj.legacyReference = message.legacyReference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tariff>, I>>(object: I): Tariff {
    const message = createBaseTariff();
    message.tariffId = object.tariffId ?? "";
    message.name = object.name ?? "";
    message.fuelTypes = object.fuelTypes?.map((e) => e) || [];
    message.paymentMethod = object.paymentMethod ?? 0;
    message.tariffType = object.tariffType ?? 0;
    message.publicationStatus = object.publicationStatus ?? 0;
    message.availableFrom = object.availableFrom ?? undefined;
    message.availableTo = object.availableTo ?? undefined;
    message.features =
      object.features !== undefined && object.features !== null
        ? TariffFeatures.fromPartial(object.features)
        : undefined;
    message.legacyReference = object.legacyReference ?? undefined;
    return message;
  },
};

function createBaseTariffFeatures(): TariffFeatures {
  return { rateStartTimes: [], standingChargeInterval: 0 };
}

export const TariffFeatures = {
  encode(
    message: TariffFeatures,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rateStartTimes) {
      writer.uint32(10).string(v!);
    }
    if (message.standingChargeInterval !== 0) {
      writer.uint32(16).int32(message.standingChargeInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TariffFeatures {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTariffFeatures();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStartTimes.push(reader.string());
          break;
        case 2:
          message.standingChargeInterval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TariffFeatures {
    return {
      rateStartTimes: Array.isArray(object?.rateStartTimes)
        ? object.rateStartTimes.map((e: any) => String(e))
        : [],
      standingChargeInterval: isSet(object.standingChargeInterval)
        ? intervalFromJSON(object.standingChargeInterval)
        : 0,
    };
  },

  toJSON(message: TariffFeatures): unknown {
    const obj: any = {};
    if (message.rateStartTimes) {
      obj.rateStartTimes = message.rateStartTimes.map((e) => e);
    } else {
      obj.rateStartTimes = [];
    }
    message.standingChargeInterval !== undefined &&
      (obj.standingChargeInterval = intervalToJSON(
        message.standingChargeInterval
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TariffFeatures>, I>>(
    object: I
  ): TariffFeatures {
    const message = createBaseTariffFeatures();
    message.rateStartTimes = object.rateStartTimes?.map((e) => e) || [];
    message.standingChargeInterval = object.standingChargeInterval ?? 0;
    return message;
  },
};

function createBasePricePack(): PricePack {
  return {
    regionCode: "",
    fuelType: 0,
    existingMembersEffectiveAt: undefined,
    newMembersEffectiveAt: undefined,
    unitRates: [],
    standingCharge: undefined,
  };
}

export const PricePack = {
  encode(
    message: PricePack,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regionCode !== "") {
      writer.uint32(10).string(message.regionCode);
    }
    if (message.fuelType !== 0) {
      writer.uint32(16).int32(message.fuelType);
    }
    if (message.existingMembersEffectiveAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.existingMembersEffectiveAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.newMembersEffectiveAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.newMembersEffectiveAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.unitRates) {
      UnitRate.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.standingCharge !== undefined) {
      StandingCharge.encode(
        message.standingCharge,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricePack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricePack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionCode = reader.string();
          break;
        case 2:
          message.fuelType = reader.int32() as any;
          break;
        case 3:
          message.existingMembersEffectiveAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.newMembersEffectiveAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.unitRates.push(UnitRate.decode(reader, reader.uint32()));
          break;
        case 6:
          message.standingCharge = StandingCharge.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PricePack {
    return {
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      fuelType: isSet(object.fuelType) ? fuelTypeFromJSON(object.fuelType) : 0,
      existingMembersEffectiveAt: isSet(object.existingMembersEffectiveAt)
        ? fromJsonTimestamp(object.existingMembersEffectiveAt)
        : undefined,
      newMembersEffectiveAt: isSet(object.newMembersEffectiveAt)
        ? fromJsonTimestamp(object.newMembersEffectiveAt)
        : undefined,
      unitRates: Array.isArray(object?.unitRates)
        ? object.unitRates.map((e: any) => UnitRate.fromJSON(e))
        : [],
      standingCharge: isSet(object.standingCharge)
        ? StandingCharge.fromJSON(object.standingCharge)
        : undefined,
    };
  },

  toJSON(message: PricePack): unknown {
    const obj: any = {};
    message.regionCode !== undefined && (obj.regionCode = message.regionCode);
    message.fuelType !== undefined &&
      (obj.fuelType = fuelTypeToJSON(message.fuelType));
    message.existingMembersEffectiveAt !== undefined &&
      (obj.existingMembersEffectiveAt =
        message.existingMembersEffectiveAt.toISOString());
    message.newMembersEffectiveAt !== undefined &&
      (obj.newMembersEffectiveAt = message.newMembersEffectiveAt.toISOString());
    if (message.unitRates) {
      obj.unitRates = message.unitRates.map((e) =>
        e ? UnitRate.toJSON(e) : undefined
      );
    } else {
      obj.unitRates = [];
    }
    message.standingCharge !== undefined &&
      (obj.standingCharge = message.standingCharge
        ? StandingCharge.toJSON(message.standingCharge)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PricePack>, I>>(
    object: I
  ): PricePack {
    const message = createBasePricePack();
    message.regionCode = object.regionCode ?? "";
    message.fuelType = object.fuelType ?? 0;
    message.existingMembersEffectiveAt =
      object.existingMembersEffectiveAt ?? undefined;
    message.newMembersEffectiveAt = object.newMembersEffectiveAt ?? undefined;
    message.unitRates =
      object.unitRates?.map((e) => UnitRate.fromPartial(e)) || [];
    message.standingCharge =
      object.standingCharge !== undefined && object.standingCharge !== null
        ? StandingCharge.fromPartial(object.standingCharge)
        : undefined;
    return message;
  },
};

function createBaseUnitRate(): UnitRate {
  return { cents: 0, unit: 0, startTime: undefined };
}

export const UnitRate = {
  encode(
    message: UnitRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cents !== 0) {
      writer.uint32(9).double(message.cents);
    }
    if (message.unit !== 0) {
      writer.uint32(16).int32(message.unit);
    }
    if (message.startTime !== undefined) {
      writer.uint32(26).string(message.startTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cents = reader.double();
          break;
        case 2:
          message.unit = reader.int32() as any;
          break;
        case 3:
          message.startTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitRate {
    return {
      cents: isSet(object.cents) ? Number(object.cents) : 0,
      unit: isSet(object.unit) ? unitFromJSON(object.unit) : 0,
      startTime: isSet(object.startTime) ? String(object.startTime) : undefined,
    };
  },

  toJSON(message: UnitRate): unknown {
    const obj: any = {};
    message.cents !== undefined && (obj.cents = message.cents);
    message.unit !== undefined && (obj.unit = unitToJSON(message.unit));
    message.startTime !== undefined && (obj.startTime = message.startTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnitRate>, I>>(object: I): UnitRate {
    const message = createBaseUnitRate();
    message.cents = object.cents ?? 0;
    message.unit = object.unit ?? 0;
    message.startTime = object.startTime ?? undefined;
    return message;
  },
};

function createBaseStandingCharge(): StandingCharge {
  return { cents: 0, interval: 0 };
}

export const StandingCharge = {
  encode(
    message: StandingCharge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cents !== 0) {
      writer.uint32(9).double(message.cents);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StandingCharge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStandingCharge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cents = reader.double();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StandingCharge {
    return {
      cents: isSet(object.cents) ? Number(object.cents) : 0,
      interval: isSet(object.interval) ? intervalFromJSON(object.interval) : 0,
    };
  },

  toJSON(message: StandingCharge): unknown {
    const obj: any = {};
    message.cents !== undefined && (obj.cents = message.cents);
    message.interval !== undefined &&
      (obj.interval = intervalToJSON(message.interval));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StandingCharge>, I>>(
    object: I
  ): StandingCharge {
    const message = createBaseStandingCharge();
    message.cents = object.cents ?? 0;
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBasePriceChange(): PriceChange {
  return {
    priceChangeId: "",
    createdAt: undefined,
    existingMembersEffectiveAt: undefined,
    newMembersEffectiveAt: undefined,
    publishedAt: undefined,
    reviews: [],
    orchestrationSteps: undefined,
  };
}

export const PriceChange = {
  encode(
    message: PriceChange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.priceChangeId !== "") {
      writer.uint32(10).string(message.priceChangeId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.existingMembersEffectiveAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.existingMembersEffectiveAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.newMembersEffectiveAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.newMembersEffectiveAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.publishedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publishedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.reviews) {
      Review.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.orchestrationSteps !== undefined) {
      OrchestrationSteps.encode(
        message.orchestrationSteps,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceChangeId = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.existingMembersEffectiveAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.newMembersEffectiveAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.publishedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.reviews.push(Review.decode(reader, reader.uint32()));
          break;
        case 7:
          message.orchestrationSteps = OrchestrationSteps.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceChange {
    return {
      priceChangeId: isSet(object.priceChangeId)
        ? String(object.priceChangeId)
        : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      existingMembersEffectiveAt: isSet(object.existingMembersEffectiveAt)
        ? fromJsonTimestamp(object.existingMembersEffectiveAt)
        : undefined,
      newMembersEffectiveAt: isSet(object.newMembersEffectiveAt)
        ? fromJsonTimestamp(object.newMembersEffectiveAt)
        : undefined,
      publishedAt: isSet(object.publishedAt)
        ? fromJsonTimestamp(object.publishedAt)
        : undefined,
      reviews: Array.isArray(object?.reviews)
        ? object.reviews.map((e: any) => Review.fromJSON(e))
        : [],
      orchestrationSteps: isSet(object.orchestrationSteps)
        ? OrchestrationSteps.fromJSON(object.orchestrationSteps)
        : undefined,
    };
  },

  toJSON(message: PriceChange): unknown {
    const obj: any = {};
    message.priceChangeId !== undefined &&
      (obj.priceChangeId = message.priceChangeId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.existingMembersEffectiveAt !== undefined &&
      (obj.existingMembersEffectiveAt =
        message.existingMembersEffectiveAt.toISOString());
    message.newMembersEffectiveAt !== undefined &&
      (obj.newMembersEffectiveAt = message.newMembersEffectiveAt.toISOString());
    message.publishedAt !== undefined &&
      (obj.publishedAt = message.publishedAt.toISOString());
    if (message.reviews) {
      obj.reviews = message.reviews.map((e) =>
        e ? Review.toJSON(e) : undefined
      );
    } else {
      obj.reviews = [];
    }
    message.orchestrationSteps !== undefined &&
      (obj.orchestrationSteps = message.orchestrationSteps
        ? OrchestrationSteps.toJSON(message.orchestrationSteps)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceChange>, I>>(
    object: I
  ): PriceChange {
    const message = createBasePriceChange();
    message.priceChangeId = object.priceChangeId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.existingMembersEffectiveAt =
      object.existingMembersEffectiveAt ?? undefined;
    message.newMembersEffectiveAt = object.newMembersEffectiveAt ?? undefined;
    message.publishedAt = object.publishedAt ?? undefined;
    message.reviews = object.reviews?.map((e) => Review.fromPartial(e)) || [];
    message.orchestrationSteps =
      object.orchestrationSteps !== undefined &&
      object.orchestrationSteps !== null
        ? OrchestrationSteps.fromPartial(object.orchestrationSteps)
        : undefined;
    return message;
  },
};

function createBaseReview(): Review {
  return { reviewer: "", approved: false };
}

export const Review = {
  encode(
    message: Review,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reviewer !== "") {
      writer.uint32(10).string(message.reviewer);
    }
    if (message.approved === true) {
      writer.uint32(16).bool(message.approved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Review {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer = reader.string();
          break;
        case 2:
          message.approved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Review {
    return {
      reviewer: isSet(object.reviewer) ? String(object.reviewer) : "",
      approved: isSet(object.approved) ? Boolean(object.approved) : false,
    };
  },

  toJSON(message: Review): unknown {
    const obj: any = {};
    message.reviewer !== undefined && (obj.reviewer = message.reviewer);
    message.approved !== undefined && (obj.approved = message.approved);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Review>, I>>(object: I): Review {
    const message = createBaseReview();
    message.reviewer = object.reviewer ?? "";
    message.approved = object.approved ?? false;
    return message;
  },
};

function createBaseOrchestrationSteps(): OrchestrationSteps {
  return {
    juniferUpdated: false,
    pcwsUpdated: false,
    commsSent: false,
    payReviewCompleted: false,
  };
}

export const OrchestrationSteps = {
  encode(
    message: OrchestrationSteps,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.juniferUpdated === true) {
      writer.uint32(8).bool(message.juniferUpdated);
    }
    if (message.pcwsUpdated === true) {
      writer.uint32(16).bool(message.pcwsUpdated);
    }
    if (message.commsSent === true) {
      writer.uint32(24).bool(message.commsSent);
    }
    if (message.payReviewCompleted === true) {
      writer.uint32(32).bool(message.payReviewCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrchestrationSteps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrchestrationSteps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juniferUpdated = reader.bool();
          break;
        case 2:
          message.pcwsUpdated = reader.bool();
          break;
        case 3:
          message.commsSent = reader.bool();
          break;
        case 4:
          message.payReviewCompleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrchestrationSteps {
    return {
      juniferUpdated: isSet(object.juniferUpdated)
        ? Boolean(object.juniferUpdated)
        : false,
      pcwsUpdated: isSet(object.pcwsUpdated)
        ? Boolean(object.pcwsUpdated)
        : false,
      commsSent: isSet(object.commsSent) ? Boolean(object.commsSent) : false,
      payReviewCompleted: isSet(object.payReviewCompleted)
        ? Boolean(object.payReviewCompleted)
        : false,
    };
  },

  toJSON(message: OrchestrationSteps): unknown {
    const obj: any = {};
    message.juniferUpdated !== undefined &&
      (obj.juniferUpdated = message.juniferUpdated);
    message.pcwsUpdated !== undefined &&
      (obj.pcwsUpdated = message.pcwsUpdated);
    message.commsSent !== undefined && (obj.commsSent = message.commsSent);
    message.payReviewCompleted !== undefined &&
      (obj.payReviewCompleted = message.payReviewCompleted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrchestrationSteps>, I>>(
    object: I
  ): OrchestrationSteps {
    const message = createBaseOrchestrationSteps();
    message.juniferUpdated = object.juniferUpdated ?? false;
    message.pcwsUpdated = object.pcwsUpdated ?? false;
    message.commsSent = object.commsSent ?? false;
    message.payReviewCompleted = object.payReviewCompleted ?? false;
    return message;
  },
};

export type TariffServiceService = typeof TariffServiceService;
export const TariffServiceService = {
  listTariffs: {
    path: "/bulb.tariff.v1.TariffService/ListTariffs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTariffsRequest) =>
      Buffer.from(ListTariffsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTariffsRequest.decode(value),
    responseSerialize: (value: ListTariffsResponse) =>
      Buffer.from(ListTariffsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTariffsResponse.decode(value),
  },
  batchGetTariffs: {
    path: "/bulb.tariff.v1.TariffService/BatchGetTariffs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BatchGetTariffsRequest) =>
      Buffer.from(BatchGetTariffsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BatchGetTariffsRequest.decode(value),
    responseSerialize: (value: BatchGetTariffsResponse) =>
      Buffer.from(BatchGetTariffsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      BatchGetTariffsResponse.decode(value),
  },
  getTariff: {
    path: "/bulb.tariff.v1.TariffService/GetTariff",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTariffRequest) =>
      Buffer.from(GetTariffRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTariffRequest.decode(value),
    responseSerialize: (value: Tariff) =>
      Buffer.from(Tariff.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Tariff.decode(value),
  },
  updateTariff: {
    path: "/bulb.tariff.v1.TariffService/UpdateTariff",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTariffRequest) =>
      Buffer.from(UpdateTariffRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTariffRequest.decode(value),
    responseSerialize: (value: Tariff) =>
      Buffer.from(Tariff.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Tariff.decode(value),
  },
  streamRatesForTariff: {
    path: "/bulb.tariff.v1.TariffService/StreamRatesForTariff",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetRatesForTariffRequest) =>
      Buffer.from(GetRatesForTariffRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetRatesForTariffRequest.decode(value),
    responseSerialize: (value: PricePack) =>
      Buffer.from(PricePack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PricePack.decode(value),
  },
  streamUpdateRatesForPriceChange: {
    path: "/bulb.tariff.v1.TariffService/StreamUpdateRatesForPriceChange",
    requestStream: true,
    responseStream: false,
    requestSerialize: (value: PriceChangeTariffPricePack) =>
      Buffer.from(PriceChangeTariffPricePack.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      PriceChangeTariffPricePack.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface TariffServiceServer extends UntypedServiceImplementation {
  listTariffs: handleUnaryCall<ListTariffsRequest, ListTariffsResponse>;
  batchGetTariffs: handleUnaryCall<
    BatchGetTariffsRequest,
    BatchGetTariffsResponse
  >;
  getTariff: handleUnaryCall<GetTariffRequest, Tariff>;
  updateTariff: handleUnaryCall<UpdateTariffRequest, Tariff>;
  streamRatesForTariff: handleServerStreamingCall<
    GetRatesForTariffRequest,
    PricePack
  >;
  streamUpdateRatesForPriceChange: handleClientStreamingCall<
    PriceChangeTariffPricePack,
    Empty
  >;
}

export interface TariffServiceClient extends Client {
  listTariffs(
    request: ListTariffsRequest,
    callback: (
      error: ServiceError | null,
      response: ListTariffsResponse
    ) => void
  ): ClientUnaryCall;
  listTariffs(
    request: ListTariffsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTariffsResponse
    ) => void
  ): ClientUnaryCall;
  listTariffs(
    request: ListTariffsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTariffsResponse
    ) => void
  ): ClientUnaryCall;
  batchGetTariffs(
    request: BatchGetTariffsRequest,
    callback: (
      error: ServiceError | null,
      response: BatchGetTariffsResponse
    ) => void
  ): ClientUnaryCall;
  batchGetTariffs(
    request: BatchGetTariffsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: BatchGetTariffsResponse
    ) => void
  ): ClientUnaryCall;
  batchGetTariffs(
    request: BatchGetTariffsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: BatchGetTariffsResponse
    ) => void
  ): ClientUnaryCall;
  getTariff(
    request: GetTariffRequest,
    callback: (error: ServiceError | null, response: Tariff) => void
  ): ClientUnaryCall;
  getTariff(
    request: GetTariffRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Tariff) => void
  ): ClientUnaryCall;
  getTariff(
    request: GetTariffRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Tariff) => void
  ): ClientUnaryCall;
  updateTariff(
    request: UpdateTariffRequest,
    callback: (error: ServiceError | null, response: Tariff) => void
  ): ClientUnaryCall;
  updateTariff(
    request: UpdateTariffRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Tariff) => void
  ): ClientUnaryCall;
  updateTariff(
    request: UpdateTariffRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Tariff) => void
  ): ClientUnaryCall;
  streamRatesForTariff(
    request: GetRatesForTariffRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<PricePack>;
  streamRatesForTariff(
    request: GetRatesForTariffRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<PricePack>;
  streamUpdateRatesForPriceChange(
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientWritableStream<PriceChangeTariffPricePack>;
  streamUpdateRatesForPriceChange(
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientWritableStream<PriceChangeTariffPricePack>;
  streamUpdateRatesForPriceChange(
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientWritableStream<PriceChangeTariffPricePack>;
  streamUpdateRatesForPriceChange(
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientWritableStream<PriceChangeTariffPricePack>;
}

export const TariffServiceClient = makeGenericClientConstructor(
  TariffServiceService,
  "bulb.tariff.v1.TariffService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TariffServiceClient;
  service: typeof TariffServiceService;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
