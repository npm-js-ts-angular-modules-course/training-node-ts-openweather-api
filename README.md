# Openweather API (in working)

API Openweather with basic request.

## Functions

* Take current weather data

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
import { ApiService } from '@mugan86/openweather-api';

const api = new ApiService('YOUR_API_KEY');
api.getCurrentWeatherInLondon().then( (value: any) =>
    console.log(value)
);
```
Javascript
```javascript
var i = require('@mugan86/openweather-api');

const api = new i.ApiService('YOUR_API_KEY');
api.getCurrentWeatherInLondon().then( data =>
    console.log(data)
);
```
## License
[MIT](https://choosealicense.com/licenses/mit/)