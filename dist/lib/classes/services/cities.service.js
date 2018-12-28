"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cities_list_1 = require("./../../constants/cities-list");
/**
 * Manage cities info
 */
class CitiesService {
    constructor() {
        /**
         * Take cities list from constants
         */
        this.list = cities_list_1.CITIES_LIST;
    }
    /**
     * Take available cities list
     * @param json Return in JSON or no. Default "true"
     */
    getList(json = true) {
        if (json) {
            return this.list['list'];
        }
        return JSON.stringify(this.list['list']);
    }
    /**
     * Show cities list available in library by default
     */
    printCitiesList() {
        console.log('********************************');
        const cities = this.getList();
        for (let i = 0; i < cities.length; i++) {
            const city = cities[i];
            console.log(city.name, city.location.lat, city.location.lng);
        }
        console.log('********************************');
    }
    /**
     * Use exist List in library to take select city object info
     * @param name Name of city to take all info
     */
    selectCity(name) {
        return this.getList().find((city) => city.name === name);
    }
}
exports.CitiesService = CitiesService;
