export class CitiesService {
    list: any = {
        "list": [
            {
                "name": "Barcelona",
                "country": "es",
                "location": {
                    "lat": 41.40340260589794    ,      
                    "lng": 2.186880111694336
                },
                "zip": "08026"
            },
            {
                "name": "Bilbao",
                "country": "es",
                "location": {
                    "lat": 43.26    ,    
                    "lng": -2.94
                },
                "zip": "48002"
            },
            {
                "name": "Paris",
                "country": "fr",
                "location": {
                    "lat": 48.856614    ,    
                    "lng": 2.3522219000000177
                },
                "zip": "75006"
            },
            {
                "name": "Roma",
                "country": "it",
                "location": {
                    "lat": 41.9027835    ,    
                    "lng": 12.496365500000024
                },
                "zip": 333
            }
        ],
        "last_update": "2018-11-25"
    };

    /**
     * Take available cities list
     * @param json Return in JSON or no. Default "true"
     */
    getList(json: boolean = true) {
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
    selectCity(name: string) {
        return this.getList().find( (city: any) => city.name === name );
    }
}