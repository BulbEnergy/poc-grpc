"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTariff = exports.listTariffs = exports.client = void 0;
// create client
const grpc_js_1 = require("@grpc/grpc-js");
const tariff_1 = require("../generated/tariff");
exports.client = new tariff_1.TariffServiceClient("localhost:50051", grpc_js_1.credentials.createInsecure());
/**
 * list tariffs
 */
function listTariffs() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = {};
        exports.client.listTariffs(request, (error, response) => {
            if (error) {
                return console.error('listTariffs error:', error);
            }
            return response.tariffs;
        });
    });
}
exports.listTariffs = listTariffs;
function getTariff(tariffId) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = {
            tariffId: tariffId
        };
        exports.client.getTariff(request, (error, response) => {
            if (error) {
                return console.error('getTariff error:', error);
            }
        });
    });
}
exports.getTariff = getTariff;
