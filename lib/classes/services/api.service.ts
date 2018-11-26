import { Location } from './../interfaces/location.interface';
import { RequestService } from './request.service';
import * as request from 'request-promise-native';

export class ApiService {
    private API_KEY: string;
    private req: RequestService;
    private unitMetric: string;
    private language: string;
    constructor(apiKey: string, unitMetric: string = 'm', language: string = 'en') {
        this.API_KEY = apiKey;
        this.req = new RequestService();
        this.unitMetric = this.defineUnitMetric(unitMetric);
        this.language = `&lang=${language}`;
    }

    /**
     * Manage to return metric or standard metric values
     * @param unit Metric unit to return value in temperature with celsius or kelvin
     */
    private defineUnitMetric(unit: string) {
        if (unit === 'm' || unit === 'metres') {
            return `&units=metric`;
        }
        return ``;
    }
    /**
     * Take current weather of select city and country.
     * @example
     * getCurrentWeatherByCity('Madrid', 'es') --> Madrid (Spain) current weather Data.
     * getCurrentWeatherByCity('Barcelona', '', true) --> Find Barcelona (Spain)
     * @param city { string} add select city.
     * @param country { string } add country code value.
     */
    getCurrentWeatherByCity(city: string = '', country: string = '') {
        // Si queremos mapear 
        /*return request.get(options).then( value => {
                return value['coord']
            }
        );*/
        let findValue = '';
        if ((city === null || city === undefined || city === '')
                && country === null || country === undefined || country === '') {
            findValue = 'London,uk';
        } else {
                findValue = `q=${ city },${ country }`;
        }

        return request.get(this.req.getQuery(`weather?${ findValue }${ this.unitMetric }${ this.language }&appid=${ this.API_KEY }`));
    }

    /**
     * Take current weather data in select place to add coordinates
     * @example 
     * location = {lat: 36.1699412, lng: -115.13982959999998} - Las Vegas
     * location = {lat: 41.9027835, lng: 12.496365500000024} - Roma
     * @param location {Location} Add location coordinates in {lat: number, lng: number } format
     */
    getCurrentWeatherByLocation(location: Location) {
        
        const value = `lat=${ location.lat }&lon=${ location.lng }`;
        return request.get(this.req.getQuery(`weather?${ value }${ this.unitMetric }&appid=${ this.API_KEY }`));
    }

    /**
     * Input select city zip code to take this select weather current data.
     * @example
     * Las Vegas = 48104
     * Barcelona = 08026
     * Bilbao = 48002
     * @param zipCode { string } location zip code add. 
     */
    getCurrentWeatherByZip(zipCode: string = "-1") {
        return request.get(this.req.getQuery(`weather?zip=${ zipCode }${ this.unitMetric }&appid=${ this.API_KEY }`));

    }

}