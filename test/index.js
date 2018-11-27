const expect = require('chai').expect;
const nock = require('nock');
describe('First test', () => {
    it('Should assert true to be true', () => {
        expect(true).to.be.true;
    });
});

const apiService = require('../dist/index').ApiService;
const lasVegasZip = require('./zip/las-vegas');
const query = {
    'zip': '89104',
    'units': 'metric',
    'lang': 'es',
    'appid': 'ec32f42ea9357dae4e8e8dbc6d0f77f9'
};

describe('Get User tests', () => {
    beforeEach(() => {
        nock('https://api.openweathermap.org/')
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, lasVegasZip);
    });
    it('Get a user by username', () => {
        const api = new apiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');

        console.log(lasVegasZip);
        const value = api.getCurrentWeather('zip', ['89104', true]);
        value.subscribe(data => {
            expect(typeof lasVegasZip).equal.to('object');
        })
    });
});