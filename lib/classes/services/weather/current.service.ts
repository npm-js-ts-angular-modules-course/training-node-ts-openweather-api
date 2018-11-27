import { ConfigService } from './../api/config.service';
import { Location } from './../../interfaces/location.interface';
import {RxHR} from "@akanass/rx-http-request";
import { API_URL } from '../../../constants/environments';

export class CurrentService {
    private apiKey: string;
    private unitMetric: string;
    private language: string;
    constructor(apiKey: string, unitMetric: string = 'm', lang: string = 'en') {
        this.apiKey = apiKey;
        this.unitMetric = ConfigService.setUnitMetric(unitMetric);
        this.language = ConfigService.setLanguage(lang);
    }
    /**
    * Take current weather of select city and country.
    * @example
    * getByCity('Madrid,es', 'es') --> Madrid (Spain) current weather Data.
    * getByCity('Barcelona', '', true) --> Find Barcelona (Spain)
    * @param city { string} add select city.
    * @param jsonFormat Show result in JSON
    */
    getByCity(city: string = '', jsonFormat: boolean) {
        
        let findValue = '';
        if (city === null || city === undefined || city === '') {
            findValue = 'q=London,uk';
        } else {
            findValue = `q=${city}`;
        }

        const URL = `${API_URL }weather?${findValue}${this.unitMetric}${this.language}&appid=${ this.apiKey }`
        return RxHR.get(URL, ConfigService.options(jsonFormat));
                                            
    }

    /**
     * Take current weather data in select place to add coordinates
     * @example 
     * location = {lat: 36.1699412, lng: -115.13982959999998} - Las Vegas
     * location = {lat: 41.9027835, lng: 12.496365500000024} - Roma
     * @param location {Location} Add location coordinates in {lat: number, lng: number } format
     */
    getByLocation(location: Location, jsonFormat: boolean) {
        const value = `lat=${location.lat}&lon=${location.lng}`;
        const URL = `${API_URL }weather?${value}${this.unitMetric}${this.language}&appid=${ this.apiKey }`
        return RxHR.get(URL, ConfigService.options(jsonFormat));
    }

    /**
     * Input select city zip code to take this select weather current data.
     * @example
     * Las Vegas = 48104
     * Barcelona = 08026
     * Bilbao = 48002
     * @param zipCode { string } location zip code add. 
     */
    getByZip(zipCode: string = "-1", jsonFormat: boolean) {
        const URL = `${API_URL }weather?zip=${zipCode}${this.unitMetric}${this.language}&appid=${ this.apiKey }`
        return RxHR.get(URL, ConfigService.options(jsonFormat));
    }
}