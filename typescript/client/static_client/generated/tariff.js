"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TariffServiceClient = exports.TariffServiceService = exports.OrchestrationSteps = exports.Review = exports.PriceChange = exports.StandingCharge = exports.UnitRate = exports.PricePack = exports.TariffFeatures = exports.Tariff = exports.PriceChangeTariffPricePack = exports.GetRatesForTariffRequest = exports.UpdateTariffRequest = exports.GetTariffRequest = exports.BatchGetTariffsResponse = exports.BatchGetTariffsRequest = exports.ListTariffsResponse = exports.ListTariffsRequest = exports.unitToJSON = exports.unitFromJSON = exports.Unit = exports.intervalToJSON = exports.intervalFromJSON = exports.Interval = exports.paymentMethodToJSON = exports.paymentMethodFromJSON = exports.PaymentMethod = exports.publicationStatusToJSON = exports.publicationStatusFromJSON = exports.PublicationStatus = exports.tariffTypeToJSON = exports.tariffTypeFromJSON = exports.TariffType = exports.fuelTypeToJSON = exports.fuelTypeFromJSON = exports.FuelType = exports.protobufPackage = void 0;
/* eslint-disable */
// @ts-ignore
const Long = __importStar(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
const empty_1 = require("./google/protobuf/empty");
exports.protobufPackage = "bulb.tariff.v1";
var FuelType;
(function (FuelType) {
    FuelType[FuelType["UNKNOWN_FUEL"] = 0] = "UNKNOWN_FUEL";
    FuelType[FuelType["ELECTRICITY"] = 1] = "ELECTRICITY";
    FuelType[FuelType["GAS"] = 2] = "GAS";
    FuelType[FuelType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FuelType = exports.FuelType || (exports.FuelType = {}));
function fuelTypeFromJSON(object) {
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
exports.fuelTypeFromJSON = fuelTypeFromJSON;
function fuelTypeToJSON(object) {
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
exports.fuelTypeToJSON = fuelTypeToJSON;
var TariffType;
(function (TariffType) {
    TariffType[TariffType["UNKNOWN_TARIFF"] = 0] = "UNKNOWN_TARIFF";
    TariffType[TariffType["VARIABLE"] = 1] = "VARIABLE";
    TariffType[TariffType["FIXED"] = 2] = "FIXED";
    TariffType[TariffType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TariffType = exports.TariffType || (exports.TariffType = {}));
function tariffTypeFromJSON(object) {
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
exports.tariffTypeFromJSON = tariffTypeFromJSON;
function tariffTypeToJSON(object) {
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
exports.tariffTypeToJSON = tariffTypeToJSON;
var PublicationStatus;
(function (PublicationStatus) {
    PublicationStatus[PublicationStatus["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
    PublicationStatus[PublicationStatus["UNDER_CONSTRUCTION"] = 1] = "UNDER_CONSTRUCTION";
    PublicationStatus[PublicationStatus["DRAFT"] = 2] = "DRAFT";
    PublicationStatus[PublicationStatus["LIVE"] = 3] = "LIVE";
    PublicationStatus[PublicationStatus["ARCHIVED"] = 4] = "ARCHIVED";
    PublicationStatus[PublicationStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PublicationStatus = exports.PublicationStatus || (exports.PublicationStatus = {}));
function publicationStatusFromJSON(object) {
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
exports.publicationStatusFromJSON = publicationStatusFromJSON;
function publicationStatusToJSON(object) {
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
exports.publicationStatusToJSON = publicationStatusToJSON;
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["UNKNOWN_PAYMENT_METHOD"] = 0] = "UNKNOWN_PAYMENT_METHOD";
    /** DIRECT_DEBIT - ... */
    PaymentMethod[PaymentMethod["DIRECT_DEBIT"] = 1] = "DIRECT_DEBIT";
    PaymentMethod[PaymentMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
function paymentMethodFromJSON(object) {
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
exports.paymentMethodFromJSON = paymentMethodFromJSON;
function paymentMethodToJSON(object) {
    switch (object) {
        case PaymentMethod.UNKNOWN_PAYMENT_METHOD:
            return "UNKNOWN_PAYMENT_METHOD";
        case PaymentMethod.DIRECT_DEBIT:
            return "DIRECT_DEBIT";
        default:
            return "UNKNOWN";
    }
}
exports.paymentMethodToJSON = paymentMethodToJSON;
var Interval;
(function (Interval) {
    Interval[Interval["UNKNOWN_INTERVAL"] = 0] = "UNKNOWN_INTERVAL";
    Interval[Interval["NEVER"] = 1] = "NEVER";
    /** DAILY - ... */
    Interval[Interval["DAILY"] = 2] = "DAILY";
    Interval[Interval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Interval = exports.Interval || (exports.Interval = {}));
function intervalFromJSON(object) {
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
exports.intervalFromJSON = intervalFromJSON;
function intervalToJSON(object) {
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
exports.intervalToJSON = intervalToJSON;
var Unit;
(function (Unit) {
    Unit[Unit["UNKNOWN_UNIT"] = 0] = "UNKNOWN_UNIT";
    Unit[Unit["KWH"] = 1] = "KWH";
    Unit[Unit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Unit = exports.Unit || (exports.Unit = {}));
function unitFromJSON(object) {
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
exports.unitFromJSON = unitFromJSON;
function unitToJSON(object) {
    switch (object) {
        case Unit.UNKNOWN_UNIT:
            return "UNKNOWN_UNIT";
        case Unit.KWH:
            return "KWH";
        default:
            return "UNKNOWN";
    }
}
exports.unitToJSON = unitToJSON;
function createBaseListTariffsRequest() {
    return {};
}
exports.ListTariffsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseListTariffsRequest();
        return message;
    },
};
function createBaseListTariffsResponse() {
    return { tariffs: [] };
}
exports.ListTariffsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tariffs) {
            exports.Tariff.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListTariffsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tariffs.push(exports.Tariff.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tariffs: Array.isArray(object === null || object === void 0 ? void 0 : object.tariffs)
                ? object.tariffs.map((e) => exports.Tariff.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tariffs) {
            obj.tariffs = message.tariffs.map((e) => e ? exports.Tariff.toJSON(e) : undefined);
        }
        else {
            obj.tariffs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListTariffsResponse();
        message.tariffs = ((_a = object.tariffs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Tariff.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBatchGetTariffsRequest() {
    return { tariffIds: [], fuelTypes: [], tariffTypes: [] };
}
exports.BatchGetTariffsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tariffIds) {
            writer.uint32(10).string(v);
        }
        for (const v of message.fuelTypes) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.tariffTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                            message.tariffTypes.push(reader.int32());
                        }
                    }
                    else {
                        message.tariffTypes.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tariffIds: Array.isArray(object === null || object === void 0 ? void 0 : object.tariffIds)
                ? object.tariffIds.map((e) => String(e))
                : [],
            fuelTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.fuelTypes)
                ? object.fuelTypes.map((e) => String(e))
                : [],
            tariffTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.tariffTypes)
                ? object.tariffTypes.map((e) => tariffTypeFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tariffIds) {
            obj.tariffIds = message.tariffIds.map((e) => e);
        }
        else {
            obj.tariffIds = [];
        }
        if (message.fuelTypes) {
            obj.fuelTypes = message.fuelTypes.map((e) => e);
        }
        else {
            obj.fuelTypes = [];
        }
        if (message.tariffTypes) {
            obj.tariffTypes = message.tariffTypes.map((e) => tariffTypeToJSON(e));
        }
        else {
            obj.tariffTypes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBatchGetTariffsRequest();
        message.tariffIds = ((_a = object.tariffIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.fuelTypes = ((_b = object.fuelTypes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.tariffTypes = ((_c = object.tariffTypes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseBatchGetTariffsResponse() {
    return { tariffs: [] };
}
exports.BatchGetTariffsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tariffs) {
            exports.Tariff.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchGetTariffsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tariffs.push(exports.Tariff.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tariffs: Array.isArray(object === null || object === void 0 ? void 0 : object.tariffs)
                ? object.tariffs.map((e) => exports.Tariff.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tariffs) {
            obj.tariffs = message.tariffs.map((e) => e ? exports.Tariff.toJSON(e) : undefined);
        }
        else {
            obj.tariffs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBatchGetTariffsResponse();
        message.tariffs = ((_a = object.tariffs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Tariff.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetTariffRequest() {
    return { tariffId: "" };
}
exports.GetTariffRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tariffId !== "") {
            writer.uint32(10).string(message.tariffId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tariffId !== undefined && (obj.tariffId = message.tariffId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTariffRequest();
        message.tariffId = (_a = object.tariffId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateTariffRequest() {
    return { tariff: undefined };
}
exports.UpdateTariffRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tariff !== undefined) {
            exports.Tariff.encode(message.tariff, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateTariffRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tariff = exports.Tariff.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tariff: isSet(object.tariff) ? exports.Tariff.fromJSON(object.tariff) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tariff !== undefined &&
            (obj.tariff = message.tariff ? exports.Tariff.toJSON(message.tariff) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateTariffRequest();
        message.tariff =
            object.tariff !== undefined && object.tariff !== null
                ? exports.Tariff.fromPartial(object.tariff)
                : undefined;
        return message;
    },
};
function createBaseGetRatesForTariffRequest() {
    return { tariffId: "", fuelTypes: [], regionCodes: [] };
}
exports.GetRatesForTariffRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tariffId !== "") {
            writer.uint32(10).string(message.tariffId);
        }
        writer.uint32(18).fork();
        for (const v of message.fuelTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.regionCodes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
                            message.fuelTypes.push(reader.int32());
                        }
                    }
                    else {
                        message.fuelTypes.push(reader.int32());
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
    fromJSON(object) {
        return {
            tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
            fuelTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.fuelTypes)
                ? object.fuelTypes.map((e) => fuelTypeFromJSON(e))
                : [],
            regionCodes: Array.isArray(object === null || object === void 0 ? void 0 : object.regionCodes)
                ? object.regionCodes.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.tariffId !== undefined && (obj.tariffId = message.tariffId);
        if (message.fuelTypes) {
            obj.fuelTypes = message.fuelTypes.map((e) => fuelTypeToJSON(e));
        }
        else {
            obj.fuelTypes = [];
        }
        if (message.regionCodes) {
            obj.regionCodes = message.regionCodes.map((e) => e);
        }
        else {
            obj.regionCodes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetRatesForTariffRequest();
        message.tariffId = (_a = object.tariffId) !== null && _a !== void 0 ? _a : "";
        message.fuelTypes = ((_b = object.fuelTypes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.regionCodes = ((_c = object.regionCodes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBasePriceChangeTariffPricePack() {
    return { priceChangeId: "", tariffId: "", pricePack: undefined };
}
exports.PriceChangeTariffPricePack = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceChangeId !== "") {
            writer.uint32(10).string(message.priceChangeId);
        }
        if (message.tariffId !== "") {
            writer.uint32(18).string(message.tariffId);
        }
        if (message.pricePack !== undefined) {
            exports.PricePack.encode(message.pricePack, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.pricePack = exports.PricePack.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            priceChangeId: isSet(object.priceChangeId)
                ? String(object.priceChangeId)
                : "",
            tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
            pricePack: isSet(object.pricePack)
                ? exports.PricePack.fromJSON(object.pricePack)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceChangeId !== undefined &&
            (obj.priceChangeId = message.priceChangeId);
        message.tariffId !== undefined && (obj.tariffId = message.tariffId);
        message.pricePack !== undefined &&
            (obj.pricePack = message.pricePack
                ? exports.PricePack.toJSON(message.pricePack)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePriceChangeTariffPricePack();
        message.priceChangeId = (_a = object.priceChangeId) !== null && _a !== void 0 ? _a : "";
        message.tariffId = (_b = object.tariffId) !== null && _b !== void 0 ? _b : "";
        message.pricePack =
            object.pricePack !== undefined && object.pricePack !== null
                ? exports.PricePack.fromPartial(object.pricePack)
                : undefined;
        return message;
    },
};
function createBaseTariff() {
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
    };
}
exports.Tariff = {
    encode(message, writer = _m0.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.availableFrom), writer.uint32(58).fork()).ldelim();
        }
        if (message.availableTo !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.availableTo), writer.uint32(66).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.TariffFeatures.encode(message.features, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                            message.fuelTypes.push(reader.int32());
                        }
                    }
                    else {
                        message.fuelTypes.push(reader.int32());
                    }
                    break;
                case 4:
                    message.paymentMethod = reader.int32();
                    break;
                case 5:
                    message.tariffType = reader.int32();
                    break;
                case 6:
                    message.publicationStatus = reader.int32();
                    break;
                case 7:
                    message.availableFrom = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.availableTo = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.features = exports.TariffFeatures.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tariffId: isSet(object.tariffId) ? String(object.tariffId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            fuelTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.fuelTypes)
                ? object.fuelTypes.map((e) => fuelTypeFromJSON(e))
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
                ? exports.TariffFeatures.fromJSON(object.features)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tariffId !== undefined && (obj.tariffId = message.tariffId);
        message.name !== undefined && (obj.name = message.name);
        if (message.fuelTypes) {
            obj.fuelTypes = message.fuelTypes.map((e) => fuelTypeToJSON(e));
        }
        else {
            obj.fuelTypes = [];
        }
        message.paymentMethod !== undefined &&
            (obj.paymentMethod = paymentMethodToJSON(message.paymentMethod));
        message.tariffType !== undefined &&
            (obj.tariffType = tariffTypeToJSON(message.tariffType));
        message.publicationStatus !== undefined &&
            (obj.publicationStatus = publicationStatusToJSON(message.publicationStatus));
        message.availableFrom !== undefined &&
            (obj.availableFrom = message.availableFrom.toISOString());
        message.availableTo !== undefined &&
            (obj.availableTo = message.availableTo.toISOString());
        message.features !== undefined &&
            (obj.features = message.features
                ? exports.TariffFeatures.toJSON(message.features)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseTariff();
        message.tariffId = (_a = object.tariffId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fuelTypes = ((_c = object.fuelTypes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.paymentMethod = (_d = object.paymentMethod) !== null && _d !== void 0 ? _d : 0;
        message.tariffType = (_e = object.tariffType) !== null && _e !== void 0 ? _e : 0;
        message.publicationStatus = (_f = object.publicationStatus) !== null && _f !== void 0 ? _f : 0;
        message.availableFrom = (_g = object.availableFrom) !== null && _g !== void 0 ? _g : undefined;
        message.availableTo = (_h = object.availableTo) !== null && _h !== void 0 ? _h : undefined;
        message.features =
            object.features !== undefined && object.features !== null
                ? exports.TariffFeatures.fromPartial(object.features)
                : undefined;
        return message;
    },
};
function createBaseTariffFeatures() {
    return { rateStartTimes: [], standingChargeInterval: 0 };
}
exports.TariffFeatures = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rateStartTimes) {
            writer.uint32(10).string(v);
        }
        if (message.standingChargeInterval !== 0) {
            writer.uint32(16).int32(message.standingChargeInterval);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.standingChargeInterval = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rateStartTimes: Array.isArray(object === null || object === void 0 ? void 0 : object.rateStartTimes)
                ? object.rateStartTimes.map((e) => String(e))
                : [],
            standingChargeInterval: isSet(object.standingChargeInterval)
                ? intervalFromJSON(object.standingChargeInterval)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rateStartTimes) {
            obj.rateStartTimes = message.rateStartTimes.map((e) => e);
        }
        else {
            obj.rateStartTimes = [];
        }
        message.standingChargeInterval !== undefined &&
            (obj.standingChargeInterval = intervalToJSON(message.standingChargeInterval));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTariffFeatures();
        message.rateStartTimes = ((_a = object.rateStartTimes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.standingChargeInterval = (_b = object.standingChargeInterval) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePricePack() {
    return {
        regionCode: "",
        fuelType: 0,
        existingMembersEffectiveAt: undefined,
        newMembersEffectiveAt: undefined,
        unitRates: [],
        standingCharge: undefined,
    };
}
exports.PricePack = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.regionCode !== "") {
            writer.uint32(10).string(message.regionCode);
        }
        if (message.fuelType !== 0) {
            writer.uint32(16).int32(message.fuelType);
        }
        if (message.existingMembersEffectiveAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.existingMembersEffectiveAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.newMembersEffectiveAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.newMembersEffectiveAt), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.unitRates) {
            exports.UnitRate.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.standingCharge !== undefined) {
            exports.StandingCharge.encode(message.standingCharge, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.fuelType = reader.int32();
                    break;
                case 3:
                    message.existingMembersEffectiveAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.newMembersEffectiveAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.unitRates.push(exports.UnitRate.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.standingCharge = exports.StandingCharge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
            fuelType: isSet(object.fuelType) ? fuelTypeFromJSON(object.fuelType) : 0,
            existingMembersEffectiveAt: isSet(object.existingMembersEffectiveAt)
                ? fromJsonTimestamp(object.existingMembersEffectiveAt)
                : undefined,
            newMembersEffectiveAt: isSet(object.newMembersEffectiveAt)
                ? fromJsonTimestamp(object.newMembersEffectiveAt)
                : undefined,
            unitRates: Array.isArray(object === null || object === void 0 ? void 0 : object.unitRates)
                ? object.unitRates.map((e) => exports.UnitRate.fromJSON(e))
                : [],
            standingCharge: isSet(object.standingCharge)
                ? exports.StandingCharge.fromJSON(object.standingCharge)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.regionCode !== undefined && (obj.regionCode = message.regionCode);
        message.fuelType !== undefined &&
            (obj.fuelType = fuelTypeToJSON(message.fuelType));
        message.existingMembersEffectiveAt !== undefined &&
            (obj.existingMembersEffectiveAt =
                message.existingMembersEffectiveAt.toISOString());
        message.newMembersEffectiveAt !== undefined &&
            (obj.newMembersEffectiveAt = message.newMembersEffectiveAt.toISOString());
        if (message.unitRates) {
            obj.unitRates = message.unitRates.map((e) => e ? exports.UnitRate.toJSON(e) : undefined);
        }
        else {
            obj.unitRates = [];
        }
        message.standingCharge !== undefined &&
            (obj.standingCharge = message.standingCharge
                ? exports.StandingCharge.toJSON(message.standingCharge)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePricePack();
        message.regionCode = (_a = object.regionCode) !== null && _a !== void 0 ? _a : "";
        message.fuelType = (_b = object.fuelType) !== null && _b !== void 0 ? _b : 0;
        message.existingMembersEffectiveAt =
            (_c = object.existingMembersEffectiveAt) !== null && _c !== void 0 ? _c : undefined;
        message.newMembersEffectiveAt = (_d = object.newMembersEffectiveAt) !== null && _d !== void 0 ? _d : undefined;
        message.unitRates =
            ((_e = object.unitRates) === null || _e === void 0 ? void 0 : _e.map((e) => exports.UnitRate.fromPartial(e))) || [];
        message.standingCharge =
            object.standingCharge !== undefined && object.standingCharge !== null
                ? exports.StandingCharge.fromPartial(object.standingCharge)
                : undefined;
        return message;
    },
};
function createBaseUnitRate() {
    return { cents: 0, unit: 0, startTime: undefined };
}
exports.UnitRate = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.unit = reader.int32();
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
    fromJSON(object) {
        return {
            cents: isSet(object.cents) ? Number(object.cents) : 0,
            unit: isSet(object.unit) ? unitFromJSON(object.unit) : 0,
            startTime: isSet(object.startTime) ? String(object.startTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cents !== undefined && (obj.cents = message.cents);
        message.unit !== undefined && (obj.unit = unitToJSON(message.unit));
        message.startTime !== undefined && (obj.startTime = message.startTime);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUnitRate();
        message.cents = (_a = object.cents) !== null && _a !== void 0 ? _a : 0;
        message.unit = (_b = object.unit) !== null && _b !== void 0 ? _b : 0;
        message.startTime = (_c = object.startTime) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseStandingCharge() {
    return { cents: 0, interval: 0 };
}
exports.StandingCharge = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cents !== 0) {
            writer.uint32(9).double(message.cents);
        }
        if (message.interval !== 0) {
            writer.uint32(16).int32(message.interval);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.interval = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            cents: isSet(object.cents) ? Number(object.cents) : 0,
            interval: isSet(object.interval) ? intervalFromJSON(object.interval) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cents !== undefined && (obj.cents = message.cents);
        message.interval !== undefined &&
            (obj.interval = intervalToJSON(message.interval));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStandingCharge();
        message.cents = (_a = object.cents) !== null && _a !== void 0 ? _a : 0;
        message.interval = (_b = object.interval) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePriceChange() {
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
exports.PriceChange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceChangeId !== "") {
            writer.uint32(10).string(message.priceChangeId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.existingMembersEffectiveAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.existingMembersEffectiveAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.newMembersEffectiveAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.newMembersEffectiveAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.publishedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.reviews) {
            exports.Review.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.orchestrationSteps !== undefined) {
            exports.OrchestrationSteps.encode(message.orchestrationSteps, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.existingMembersEffectiveAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.newMembersEffectiveAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.publishedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.reviews.push(exports.Review.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.orchestrationSteps = exports.OrchestrationSteps.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
            reviews: Array.isArray(object === null || object === void 0 ? void 0 : object.reviews)
                ? object.reviews.map((e) => exports.Review.fromJSON(e))
                : [],
            orchestrationSteps: isSet(object.orchestrationSteps)
                ? exports.OrchestrationSteps.fromJSON(object.orchestrationSteps)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.reviews = message.reviews.map((e) => e ? exports.Review.toJSON(e) : undefined);
        }
        else {
            obj.reviews = [];
        }
        message.orchestrationSteps !== undefined &&
            (obj.orchestrationSteps = message.orchestrationSteps
                ? exports.OrchestrationSteps.toJSON(message.orchestrationSteps)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePriceChange();
        message.priceChangeId = (_a = object.priceChangeId) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.existingMembersEffectiveAt =
            (_c = object.existingMembersEffectiveAt) !== null && _c !== void 0 ? _c : undefined;
        message.newMembersEffectiveAt = (_d = object.newMembersEffectiveAt) !== null && _d !== void 0 ? _d : undefined;
        message.publishedAt = (_e = object.publishedAt) !== null && _e !== void 0 ? _e : undefined;
        message.reviews = ((_f = object.reviews) === null || _f === void 0 ? void 0 : _f.map((e) => exports.Review.fromPartial(e))) || [];
        message.orchestrationSteps =
            object.orchestrationSteps !== undefined &&
                object.orchestrationSteps !== null
                ? exports.OrchestrationSteps.fromPartial(object.orchestrationSteps)
                : undefined;
        return message;
    },
};
function createBaseReview() {
    return { reviewer: "", approved: false };
}
exports.Review = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.reviewer !== "") {
            writer.uint32(10).string(message.reviewer);
        }
        if (message.approved === true) {
            writer.uint32(16).bool(message.approved);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            reviewer: isSet(object.reviewer) ? String(object.reviewer) : "",
            approved: isSet(object.approved) ? Boolean(object.approved) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.reviewer !== undefined && (obj.reviewer = message.reviewer);
        message.approved !== undefined && (obj.approved = message.approved);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseReview();
        message.reviewer = (_a = object.reviewer) !== null && _a !== void 0 ? _a : "";
        message.approved = (_b = object.approved) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseOrchestrationSteps() {
    return {
        juniferUpdated: false,
        pcwsUpdated: false,
        commsSent: false,
        payReviewCompleted: false,
    };
}
exports.OrchestrationSteps = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
        message.juniferUpdated !== undefined &&
            (obj.juniferUpdated = message.juniferUpdated);
        message.pcwsUpdated !== undefined &&
            (obj.pcwsUpdated = message.pcwsUpdated);
        message.commsSent !== undefined && (obj.commsSent = message.commsSent);
        message.payReviewCompleted !== undefined &&
            (obj.payReviewCompleted = message.payReviewCompleted);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOrchestrationSteps();
        message.juniferUpdated = (_a = object.juniferUpdated) !== null && _a !== void 0 ? _a : false;
        message.pcwsUpdated = (_b = object.pcwsUpdated) !== null && _b !== void 0 ? _b : false;
        message.commsSent = (_c = object.commsSent) !== null && _c !== void 0 ? _c : false;
        message.payReviewCompleted = (_d = object.payReviewCompleted) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
exports.TariffServiceService = {
    listTariffs: {
        path: "/bulb.tariff.v1.TariffService/ListTariffs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTariffsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTariffsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTariffsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTariffsResponse.decode(value),
    },
    batchGetTariffs: {
        path: "/bulb.tariff.v1.TariffService/BatchGetTariffs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BatchGetTariffsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BatchGetTariffsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.BatchGetTariffsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.BatchGetTariffsResponse.decode(value),
    },
    getTariff: {
        path: "/bulb.tariff.v1.TariffService/GetTariff",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTariffRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTariffRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Tariff.encode(value).finish()),
        responseDeserialize: (value) => exports.Tariff.decode(value),
    },
    updateTariff: {
        path: "/bulb.tariff.v1.TariffService/UpdateTariff",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTariffRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTariffRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Tariff.encode(value).finish()),
        responseDeserialize: (value) => exports.Tariff.decode(value),
    },
    streamRatesForTariff: {
        path: "/bulb.tariff.v1.TariffService/StreamRatesForTariff",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.GetRatesForTariffRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRatesForTariffRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.PricePack.encode(value).finish()),
        responseDeserialize: (value) => exports.PricePack.decode(value),
    },
    streamUpdateRatesForPriceChange: {
        path: "/bulb.tariff.v1.TariffService/StreamUpdateRatesForPriceChange",
        requestStream: true,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PriceChangeTariffPricePack.encode(value).finish()),
        requestDeserialize: (value) => exports.PriceChangeTariffPricePack.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.TariffServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TariffServiceService, "bulb.tariff.v1.TariffService");
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
