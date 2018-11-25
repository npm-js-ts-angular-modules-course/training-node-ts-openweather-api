export declare class ApiService {
    private API_KEY;
    constructor(apiKey: string);
    getCurrentWeatherInLondon(): Promise<any>;
}
