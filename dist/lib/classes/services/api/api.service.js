"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const current_service_1 = require("./../weather/current.service");
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
class ApiService {
    constructor(apiKey, unitMet = 'm', lang = 'en') {
        this.apiKey = apiKey;
        this.unitMetric = unitMet;
        this.language = lang;
    }
    /**
     * Get current weather data using name, locaton or zip filters.
     * @example
     * getCurrentWeather('city', ['Madrid,es']) -> Madrid
     * getCurrentWeather('location', [{lat: 36.1699412, lng: -115.13982959999998}]) -> Las Vegas
     * getCurrentWeather('zip', ['89104']) -> Las Vegas
     * @param type Filter to use to find weather dependent input data
     * @param param array with contain 1 position data in any format. In first filter data
     */
    getCurrentWeather(type, param) {
        return __awaiter(this, void 0, void 0, function* () {
            const current = new current_service_1.CurrentService(this.apiKey, this.unitMetric, this.language);
            if (type === 'zip') {
                return current.getByZip(param[0]).then(data => data);
            }
            else if (type === 'location') {
                return current.getByLocation(param[0]).then(data => data);
            }
            return current.getByCity(param[0]).then(data => data); // by city
        });
    }
}
exports.ApiService = ApiService;
