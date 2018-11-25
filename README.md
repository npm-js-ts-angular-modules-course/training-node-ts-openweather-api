# Openweather API (in working)

[![npm version](https://badge.fury.io/js/%40mugan86%2Fopenweather-api.svg)](https://badge.fury.io/js/%40mugan86%2Fopenweather-api)

API Openweather with basic request.

## Functions

* Take current weather data by differents cities by Name ('Roma', 'Barcelona', 'Paris', 'Bilbao' , 'London' (default))

### Installation.
```
npm install @mugan86/openweather-api
```

### Generate DIST
```
npm run watch
```
or
```
tsc -w
```

### Usage

* Register in Openweathermap.
* Take API key from: [API Keys](https://home.openweathermap.org/api_keys)
* Follow this example. Basic example.

Typescript
```typescript
import { ApiService, CitiesService } from '@mugan86/openweather-api';

const api = new ApiService('YOUR_API_KEY');
api.getCurrentWeatherInSelectCityByName('Roma').then( value =>
    console.log(value)
);

const cities = new CitiesService;
console.log((cities.getList()));

cities.printCitiesList();

console.log(cities.selectCity('Barcelona'));
```
Javascript
```javascript
const lib = require('@mugan86/openweather-api');
const citiesService = lib.CitiesService;
const apiService = lib.ApiService;

const api = new apiService('YOUR_API_KEY');
api.getCurrentWeatherInSelectCityByName('Roma').then( value =>
    console.log(value)
);

const cities = new citiesService();
console.log((cities.getList()));

cities.printCitiesList();

console.log(cities.selectCity('Barcelona'));
```
## License
[MIT](https://choosealicense.com/licenses/mit/)