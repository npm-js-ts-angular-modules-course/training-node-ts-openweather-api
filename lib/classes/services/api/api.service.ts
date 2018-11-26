import { CurrentService } from './../weather/current.service';

export class ApiService {
    private apiKey: string;

    private unitMetric: string;
    private language: string;
    constructor(apiKey: string, unitMet: string = 'm', lang: string = 'en') {
        this.apiKey = apiKey;
        this.unitMetric = unitMet;
        this.language = lang;
    }
    /**
     * Get current weather data using name, locaton or zip filters.
     * @example
     * getCurrentWeather('city', ['Madrid,es' true]) -> Madrid with JSON format
     * getCurrentWeather('location', [{lat: 36.1699412, lng: -115.13982959999998}, true]) -> Las Vegas with JSON format
     * getCurrentWeather('zip', ['89104' true]) -> Las Vegas with JSON format
     * @param type Filter to use to find weather dependent input data
     * @param param array with contain 2 positions data. In first filter data and second JSON Format or no
     */
    getCurrentWeather(type: string, param: Array<any>) {
        const current = new CurrentService(this.apiKey, this.unitMetric, this.language);
        if (type === 'zip') {
            
        } else if (type === 'location') {
            return current.getByLocation(param[0], param[1]);
        } 
        return current.getByCity(param[0], param[1]); // by city
    }
}