const expect = require('chai').expect;

const apiService = require('../dist/index').ApiService;
const constants = require('./constants');
const API_KEY = constants.apiKey;
const API_URL = constants.apiUrl;

describe('Current Weather with Zip Code filter', () => {
    
    beforeEach(() => {
        const nockLVZip = require('nock');
        const lasVegCity = require('./zip/las-vegas');

        const query = {
            'zip': '89104',
            'units': 'metric',
            'lang': 'en',
            'appid': API_KEY
        };
        nockLVZip(API_URL)
            /*.log(console.log)*/
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, lasVegCity);
    });
    it('Check Las Vegas Current Weather', async () => {
        const api = new apiService(API_KEY, 'm');

        const data = await api.getCurrentWeather('zip', ['89104']);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('Las Vegas');
        expect(typeof data.name).to.equal('string'); 
    });
    beforeEach(() => {
        const bcnCity = require('./zip/bilbao');
        const nockBilbaoZip = require('nock');
        const query = {
            'zip': '48001',
            'units': 'metric',
            'lang': 'es',
            'appid': API_KEY
        };
        nockBilbaoZip(API_URL)
            /*.log(console.log)*/
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, bcnCity);
    });
    it('Check Bilbao City Current Weather', async () => {
        const api = new apiService(API_KEY, 'm', 'es');

        const data = await api.getCurrentWeather('zip', ['48001']);
        // expect an object back
        expect(typeof data).to.equal('object');
        // Test city name, company and location for the response
        expect(data.name).to.equal('Bilbao');
        expect(typeof data.name).to.equal('string'); 
    });
});