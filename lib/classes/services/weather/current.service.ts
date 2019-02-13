import { ConfigService } from './../api/config.service';
import { Location } from './../../interfaces/location.interface';
import { API_URL } from '../../../constants/environments';
import axios from 'axios';

/**
 * Current Weather serve service
 */
export class CurrentService {
    /**
     * @ignore
     */
    private apiKey: string;
    /**
     * @ignore
     */
    private unitMetric: string;
    /**
     * @ignore
     */
    private language: string;
    /**
     * @ignore
     */
    constructor(apiKey: string, unitMetric: string = 'm', lang: string = 'en') {
        this.apiKey = apiKey;
        this.unitMetric = ConfigService.setUnitMetric(unitMetric);
        this.language = ConfigService.setLanguage(lang);
    }
    
    /**
    * Take current weather of select city and country.
    * @example
    * getByCity('Madrid,es') --> Madrid (Spain) current weather Data.
    * getByCity('Barcelona') --> Find Barcelona (Spain)
    * @param city { string} add select city.
    */
    async getByCity(city: string = '') {
        
        let findValue = '';
        if (city === null || city === undefined || city === '') {
            findValue = 'q=London,uk';
        } else {
            findValue = `q=${city}`;
        }
        const URL = `${API_URL }weather?${findValue}${this.unitMetric}${this.language}&appid=${ this.apiKey }`
        // return RxHR.get(URL, ConfigService.options(jsonFormat));
        return axios.get(URL).then(
            data => { return data.data; }
        );
                                            
    }

    /**
     * Take current weather data in select place to add coordinates
     * @example 
     * location = {lat: 36.1699412, lon: -115.13982959999998} - Las Vegas
     * location = {lat: 41.9027835, lon: 12.496365500000024} - Roma
     * @param location {Location} Add location coordinates in {lat: number, lon: number } format
     */
    async getByLocation(location: Location) {
        const value = `lat=${location.lat}&lon=${location.lon}`;
        const URL = `${API_URL }weather?${value}${this.unitMetric}${this.language}&appid=${ this.apiKey }`
        return axios.get(URL).then(
            data => { return data.data; }
        );
    }

    /**
     * Input select city zip code to take this select weather current data.
     * @example
     * Las Vegas = 48104
     * Barcelona = 08026
     * Bilbao = 48002
     * @param zipCode { string } location zip code add. 
     */
    async getByZip(zipCode: string = "-1") {
        const URL = `${API_URL }weather?zip=${zipCode}${this.unitMetric}${this.language}&appid=${ this.apiKey }`
        return axios.get(URL).then(
            data => { return data.data; }
        );
    }
}