export declare class CitiesService {
    list: import("../../../../../../../../../../Volumes/DATA/Udemy/Proyects/NPM Course/nodets/training-node-ts-openweather-api/lib/classes/interfaces/list.interface").ListData;
    /**
     * Take available cities list
     * @param json Return in JSON or no. Default "true"
     */
    getList(json?: boolean): any;
    /**
     * Show cities list available in library by default
     */
    printCitiesList(): void;
    /**
     * Use exist List in library to take select city object info
     * @param name Name of city to take all info
     */
    selectCity(name: string): any;
}
