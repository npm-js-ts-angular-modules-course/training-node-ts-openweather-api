import { API_URL } from '../../../constants/environments';

export class QueryService {

    /**
     * Prepare URL and options to make GET request in API
     * @example
     * query = weather?q=London,uk&units=metric&lang=es
     * apiKey = APIKEY VALUE (to take go to Openweather)
     * jsonValue = true
     * Result: https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&lang=es&appid=XX
     * @param query resource params to make URL
     * @param apiKey API Key to identify with user to take api data
     * @param jsonValue Return JSON value format or no. Default = true
     */
    get(query: string, apiKey: string,jsonValue: boolean = true) {
        const url = `${ API_URL }${ query }&appid=${ apiKey }`;
        console.log(url);
        var options = {
            uri: url ,
            json: jsonValue // Para devolver un JSON o no
        };
        return options;
    }
}