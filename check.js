const lib = require('./dist');
const apiService = lib.ApiService;
 
const api = new apiService('ec32f42ea9357dae4e8e8dbc6d0f77f9');

api.getCurrentWeather('location', [{lat: 36.1699412, lon: -115.13982959999998}]).then(
    (data) => { 
        console.log('***************** LAS VEGAS *****************');
        console.log(data)
    },
    (err) => console.error(err) // Show error in console);
);