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
    get(jsonValue: boolean = true) {
        /*
        qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
            },
        headers: {
                'User-Agent': 'Rx-Http-Request'
            },*/
        const options = {
            json: jsonValue // Automatically parses the JSON string in the response
        };
        return options;
    }
}