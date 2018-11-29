"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_service_1 = require("./lib/classes/services/api/api.service");
const api = new api_service_1.ApiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');
api.getCurrentWeather('city', ['Barcelona,es']).then((data) => {
    console.log('***************** BARCELONA *****************');
    console.log(data);
}, (err) => console.error(err) // Show error in console);
);
api.getCurrentWeather('zip', ['89104']).then((data) => {
    console.log('***************** LAS VEGAS *****************');
    console.log(data);
}, (err) => console.error(err) // Show error in console);
);
api.getCurrentWeather('location', [{ lat: 36.1699412, lon: -115.13982959999998 }]).then((data) => {
    console.log('***************** LAS VEGAS *****************');
    console.log(data);
}, (err) => console.error(err) // Show error in console);
);
