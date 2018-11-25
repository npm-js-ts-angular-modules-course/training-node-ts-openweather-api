import { CitiesService } from './cities.service';
import { RequestService } from './request.service';
import * as request from 'request-promise-native';

export class ApiService {
    private API_KEY: string;
    private req: RequestService;
    private cities: CitiesService;
    private unitMetric: string;
    constructor(apiKey: string, unitMetric: string = 'm') {
        this.API_KEY = apiKey;
        this.req = new RequestService();
        this.cities = new CitiesService();
        this.unitMetric = this.defineUnitMetric(unitMetric);
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
     * 
     * @param city 
     */
    getCurrentWeatherInSelectCityByName(city: string) {
        // Si queremos mapear 
        /*return request.get(options).then( value => {
                return value['coord']
            }
        );*/
        let findValue = '';
        if (city === null || city === undefined || city === '') {
            findValue = 'London,uk';
        } else {
            const c = this.cities.selectCity(city);
            findValue = `${ c.name },${ c.country}`;
        }

        return request.get(this.req.getQuery(`weather?q=${ findValue }${ this.unitMetric }&appid=${ this.API_KEY }`));
    }

}