import { Location } from './../../interfaces/location.interface';
export declare class CurrentService {
    private apiKey;
    private unitMetric;
    private language;
    constructor(apiKey: string, unitMetric?: string, lang?: string);
    /**
    * Take current weather of select city and country.
    * @example
    * getByCity('Madrid,es') --> Madrid (Spain) current weather Data.
    * getByCity('Barcelona') --> Find Barcelona (Spain)
    * @param city { string} add select city.
    */
    getByCity(city?: string): Promise<any>;
    /**
     * Take current weather data in select place to add coordinates
     * @example
     * location = {lat: 36.1699412, lng: -115.13982959999998} - Las Vegas
     * location = {lat: 41.9027835, lng: 12.496365500000024} - Roma
     * @param location {Location} Add location coordinates in {lat: number, lng: number } format
     */
    getByLocation(location: Location): Promise<any>;
    /**
     * Input select city zip code to take this select weather current data.
     * @example
     * Las Vegas = 48104
     * Barcelona = 08026
     * Bilbao = 48002
     * @param zipCode { string } location zip code add.
     */
    getByZip(zipCode?: string): Promise<any>;
}
