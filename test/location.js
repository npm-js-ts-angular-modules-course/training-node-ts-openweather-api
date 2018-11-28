const expect = require('chai').expect;
const locationNock = require('nock');
const apiService = require('../dist/index').ApiService;
const API_KEY = require('./constants').apiKey;
// https://api.openweathermap.org/data/2.5/weather?lat=40.7127753&lon=-74.0059728&units=metric&lang=es&appid=ec32f42ea9357dae4e8e8dbc6d0f77f9

describe('Current Weather with Location filter', () => {
    beforeEach(() => {
        const newYorkCity = require('./location/new-york');

        const query = {
            'lat': 40.7127753,
            'lon': -74.0059728,
            'units': 'metric',
            'lang': 'es',
            'appid': API_KEY
        };
        locationNock('https://api.openweathermap.org/')
            /*.log(console.log)*/
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, newYorkCity);
    });
    it('Check New York City Current Weather', async () => {
        const api = new apiService(API_KEY, 'm', 'es');

        const data = await api.getCurrentWeather('location', [{lat: 40.7127753, lon: -74.0059728}]);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('New York');
        expect(typeof data.name).to.equal('string'); 
        expect(data.sys.country).to.equal('US'); 
    });
});