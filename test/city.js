const expect = require('chai').expect;

const apiService = require('../dist/index').ApiService;
const constants = require('./constants');
const API_KEY = constants.apiKey;
const API_URL = constants.apiUrl;

describe('Current Weather with City filter', () => {
    beforeEach(() => {
        const nockCity = require('nock');
        const bilbaoCity = require('./city/bilbao');

        const query = {
            'q': 'Bilbao',
            'units': 'metric',
            'lang': 'en',
            'appid': API_KEY
        };
        nockCity(API_URL)
            /*.log(console.log)*/
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, bilbaoCity);
    });
    it('Check Bilbao City Current Weather', async () => {
        const api = new apiService(API_KEY, 'm');

        const data = await api.getCurrentWeather('city', ['Bilbao', true]);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('Bilbao');
        expect(typeof data.name).to.equal('string'); 
    });

    beforeEach(() => {
        const bcnCity = require('./city/bcn');
        const nockBcnCity = require('nock');
        const query = {
            'q': 'Barcelona,es',
            'units': 'metric',
            'lang': 'es',
            'appid': API_KEY
        };
        nockBcnCity(API_URL)
            /*.log(console.log)*/
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, bcnCity);
    });
    it('Check Barcelona City Current Weather', async () => {
        const api = new apiService(API_KEY, 'm', 'es');

        const data = await api.getCurrentWeather('city', ['Barcelona,es', true]);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('Barcelona');
        expect(typeof data.name).to.equal('string'); 
    });
});