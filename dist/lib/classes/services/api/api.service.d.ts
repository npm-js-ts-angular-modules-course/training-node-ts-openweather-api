export declare class ApiService {
    private apiKey;
    private unitMetric;
    private language;
    constructor(apiKey: string, unitMet?: string, lang?: string);
    /**
     * Get current weather data using name, locaton or zip filters.
     * @example
     * getCurrentWeather('city', ['Madrid,es']) -> Madrid
     * getCurrentWeather('location', [{lat: 36.1699412, lng: -115.13982959999998}]) -> Las Vegas
     * getCurrentWeather('zip', ['89104']) -> Las Vegas
     * @param type Filter to use to find weather dependent input data
     * @param param array with contain 1 position data in any format. In first filter data
     */
    getCurrentWeather(type: string, param: Array<any>): Promise<any>;
}
