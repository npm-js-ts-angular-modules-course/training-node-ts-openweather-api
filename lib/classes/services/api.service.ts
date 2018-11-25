import { RequestService } from './request.service';
import * as request from 'request-promise-native';

export class ApiService {
    private API_KEY: string;
    private req: RequestService;
    constructor(apiKey: string) {
        this.API_KEY = apiKey;
        this.req = new RequestService();
    }
    getCurrentWeatherInLondon() {
        // Si queremos mapear 
        /*return request.get(options).then( value => {
                return value['coord']
            }
        );*/
        return request.get(this.req.getQuery(`weather?q=London,uk&appid=${ this.API_KEY }`));
    }

}