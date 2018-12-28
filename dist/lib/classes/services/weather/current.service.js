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
const config_service_1 = require("./../api/config.service");
const environments_1 = require("../../../constants/environments");
const axios_1 = __importDefault(require("axios"));
/**
 * Current Weather serve service
 */
class CurrentService {
    /**
     * @ignore
     */
    constructor(apiKey, unitMetric = 'm', lang = 'en') {
        this.apiKey = apiKey;
        this.unitMetric = config_service_1.ConfigService.setUnitMetric(unitMetric);
        this.language = config_service_1.ConfigService.setLanguage(lang);
    }
    /**
    * Take current weather of select city and country.
    * @example
    * getByCity('Madrid,es') --> Madrid (Spain) current weather Data.
    * getByCity('Barcelona') --> Find Barcelona (Spain)
    * @param city { string} add select city.
    */
    getByCity(city = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let findValue = '';
            if (city === null || city === undefined || city === '') {
                findValue = 'q=London,uk';
            }
            else {
                findValue = `q=${city}`;
            }
            const URL = `${environments_1.API_URL}weather?${findValue}${this.unitMetric}${this.language}&appid=${this.apiKey}`;
            // return RxHR.get(URL, ConfigService.options(jsonFormat));
            return axios_1.default.get(URL).then(data => { return data.data; });
        });
    }
    /**
     * Take current weather data in select place to add coordinates
     * @example
     * location = {lat: 36.1699412, lng: -115.13982959999998} - Las Vegas
     * location = {lat: 41.9027835, lng: 12.496365500000024} - Roma
     * @param location {Location} Add location coordinates in {lat: number, lng: number } format
     */
    getByLocation(location) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = `lat=${location.lat}&lon=${location.lon}`;
            const URL = `${environments_1.API_URL}weather?${value}${this.unitMetric}${this.language}&appid=${this.apiKey}`;
            return axios_1.default.get(URL).then(data => { return data.data; });
        });
    }
    /**
     * Input select city zip code to take this select weather current data.
     * @example
     * Las Vegas = 48104
     * Barcelona = 08026
     * Bilbao = 48002
     * @param zipCode { string } location zip code add.
     */
    getByZip(zipCode = "-1") {
        return __awaiter(this, void 0, void 0, function* () {
            const URL = `${environments_1.API_URL}weather?zip=${zipCode}${this.unitMetric}${this.language}&appid=${this.apiKey}`;
            return axios_1.default.get(URL).then(data => { return data.data; });
        });
    }
}
exports.CurrentService = CurrentService;
