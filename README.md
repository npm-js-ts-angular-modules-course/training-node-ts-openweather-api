# Openweather API (in working)

API Openweather with basic request.

## Functions

* Take current weather data

### Installation.
```
npm install openweather-api
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
```
import { ApiService } from './classes/services/api.service';

const api = new ApiService('YOUR_API_KEY');
api.getCurrentWeatherInLondon().then( value =>
    console.log(value)
);
```

## License
[MIT](https://choosealicense.com/licenses/mit/)