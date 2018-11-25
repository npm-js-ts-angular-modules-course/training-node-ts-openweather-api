import { API_URL } from './../../constants/environments';
import * as request from "request-promise-native";

export class ApiService {
    private API_KEY: string;
    constructor(apiKey: string) {
        this.API_KEY = apiKey;
    }

    async getCurrentWeatherInLondon() {
        const baseUrl = API_URL;
        const queryString = `weather?q=London,uk&appid=${ this.API_KEY }`;
        var options = {
            uri: baseUrl + queryString,
        };
        return await request.get(options);
    }

}