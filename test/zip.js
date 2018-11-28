const expect = require('chai').expect;
const nock = require('nock');
const apiService = require('../dist/index').ApiService;

describe('Current Weather with City filter', () => {
    beforeEach(() => {
        const bilbaoCity = require('./city/bilbao');

        const query = {
            'q': 'Bilbao',
            'units': 'metric',
            'lang': 'en',
            'appid': 'ec32f42ea9357dae4e8e8dbc6d0f77f9'
        };
        nock('https://api.openweathermap.org/')
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, bilbaoCity);
    });
    it('Check Bilbao City Current Weather', async () => {
        const api = new apiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm');

        const data = await api.getCurrentWeather('city', ['Bilbao', true]);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('Bilbao');
        expect(typeof data.name).to.equal('string'); 
    });

    beforeEach(() => {
        const bcnCity = require('./city/bcn');

        const query = {
            'q': 'Barcelona,es',
            'units': 'metric',
            'lang': 'es',
            'appid': 'ec32f42ea9357dae4e8e8dbc6d0f77f9'
        };
        nock('https://api.openweathermap.org/')
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, bcnCity);
    });
    it('Check Barcelona City Current Weather', async () => {
        const api = new apiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');

        const data = await api.getCurrentWeather('city', ['Barcelona,es', true]);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('Barcelona');
        expect(typeof data.name).to.equal('string'); 
    });
});