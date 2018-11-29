"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const languages_1 = require("./../../../constants/languages");
const axios_1 = __importDefault(require("axios"));
class ConfigService {
    /**
     * Manage to return metric or standard metric values
     * @param unit Metric unit to return value in temperature with celsius or kelvin
     */
    static setUnitMetric(unit) {
        if (unit === 'm' || unit === 'metres') {
            return `&units=metric`;
        }
        return ``;
    }
    /**
     * Define default language use to show description in select language
     * @example
     * setLanguage('es')--> Spanish language
     * setLanguage('ca')--> Catala language
     * @param language { string } Select language code.
     */
    static setLanguage(language) {
        if (language === '' || languages_1.AVAILABLE_LANGS.find((lang) => lang === language) === undefined) {
            return ``;
        }
        return `&lang=${language}`;
    }
    /**
     * Add headers in JSON Format
     * @param json
     */
    static setJsonFormat() {
        axios_1.default.defaults.headers.get['Content-Type'] = 'application/json';
    }
    static options(jsonValue = true) {
        /*
        qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
            },
        headers: {
                'User-Agent': 'Rx-Http-Request'
            },*/
        const options = {
            json: jsonValue // Automatically parses the JSON string in the response
        };
        return options;
    }
}
exports.ConfigService = ConfigService;
