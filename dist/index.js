"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var api_service_1 = require("./classes/services/api.service");
__export(require("./classes/services/api.service"));
var api = new api_service_1.ApiService('58dda22dc16b4ec458a95a0a7f2e921d');
console.log(api.getCurrentWeatherInLondon);
