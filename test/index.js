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
const apiEndPoint = 'https://api.openweathermap.org/';
const pathWithoutQuery = '/data/2.5/weather';

describe('Zip is 89104 that corresponding to "Las Vegas, UUSS"', async () => {
    beforeEach(async () => {
        nock(apiEndPoint)
            /*.log(console.log)*/
            .get(pathWithoutQuery)
            .query(query)
            .reply(200, lasVegasZip);
    });
    it('Check returning data is correct', async () => {
        const api = new apiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');
        
        return api.getCurrentWeather('zip', ['89104', true]).subscribe(result => {
            expect(typeof result).equal.to('object');
            // expect(lasVegasZip.response.request.path).equal.to(`${pathWithoutQuery}?zip=${query.zip}&units=${query.units}&lang=${query.lang}&appid=${query.appid}`);
            done();
        });
    });
});