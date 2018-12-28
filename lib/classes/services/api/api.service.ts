import { CurrentService } from './../weather/current.service';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Service that manage API differents requests
 */
export class ApiService {
    /**
     * Need Api Key to take API info
     */
    private apiKey: string;
    /**
     * Property to define use unit metric, metres or milles
     */
    private unitMetric: string;
    /**
     * select language
     */
    private language: string;
    /**
     * Take construct default properties by params
     * @param apiKey Need Api Key
     * @param unitMet Default unit metric
     * @param lang Select language
     */
    constructor(apiKey: string, unitMet: string = 'm', lang: string = 'en') {
        this.apiKey = apiKey;
        this.unitMetric = unitMet;
        this.language = lang;
    }
    /**
     * Get current weather data using name, locaton or zip filters.
     * @example
     * getCurrentWeather('city', ['Madrid,es']) -> Madrid
     * getCurrentWeather('location', [{lat: 36.1699412, lng: -115.13982959999998}]) -> Las Vegas
     * getCurrentWeather('zip', ['89104']) -> Las Vegas
     * @param type Filter to use to find weather dependent input data
     * @param param array with contain 1 position data in any format. In first filter data
     */
    async getCurrentWeather(type: string, param: Array<any>) {
        const current = new CurrentService(this.apiKey, this.unitMetric, this.language);
        if (type === 'zip') {
            return current.getByZip(param[0]).then(data => data);
        } else if (type === 'location') {
            return current.getByLocation(param[0]).then(data => data);
        } 
        return current.getByCity(param[0]).then(data => data); // by city
    }
}