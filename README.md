# Openweather API (in working)

[![npm version](https://badge.fury.io/js/%40mugan86%2Fopenweather-api.svg)](https://badge.fury.io/js/%40mugan86%2Fopenweather-api)

API Openweather with basic request.

## Functions

### Current Weather data.

* By city name: Examples = ('Roma,it', 'Barcelona,es', 'Paris,fr', 'Bilbao,es' ,...)
* By location: Example: {lat: 36.1699412, lng: -115.13982959999998} = Las Vegas
* By zip code: Example: 89104 - Las Vegas

## Forecast Weather data (Next 5 days in 3 hours period)

* Pending to implement

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

### Imports
Typescript
```typescript
import { ApiService } from '@mugan86/openweather-api';

const api = new ApiService('YOUR_API_KEY', 'm', 'es');

```
Javascript
```javascript
const lib = require('@mugan86/openweather-api');
const apiService = lib.ApiService;

const api = new apiService('YOUR_API_KEY');
```

How to use
```javascript
api.getCurrentWeather('city', ['Barcelona,es', true]).subscribe(
    (data) => {
        if (data.response.statusCode === 200) {
            console.log(data.body); // Show the HTML for the Google homepage.
        }
    },
    (err) => console.error(err) // Show error in console);
);

api.getCurrentWeather('location', [{lat: 36.1699412, lng: -115.13982959999998}, true]).subscribe(
    (data) => {
        if (data.response.statusCode === 200) {
            console.log(data.body); // Show the HTML for the Google homepage.
        }
    },
    (err) => console.error(err) // Show error in console);
);

api.getCurrentWeather('zip', ['89104', true]).subscribe(
    (data) => {
        if (data.response.statusCode === 200) {
            console.log(data.body); // Show the HTML for the Google homepage.
        }
    },
    (err) => console.error(err) // Show error in console);
);
```

## Build your project with Webpack

If you want to include this library inside a project builds with `webpack` for a `client` application, you must add this configuration inside your `webpack configuration`:

```javascript
{
    target: "web",
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    }
}
``` 


## Build your project with Webpack in Angular

If you want to include this library inside a project builds with `webpack` for a `client` application, you must add this configuration inside your `webpack configuration`. Go to **node_modules/@angular-devkit/build-angular/src/angular-cli-files/webpack-configs/browser.js**
Go to file end and replace:

```javascript
{
    plugins: extraPlugins,
    node: false
}
``` 
with 
```javascript
{
    plugins: extraPlugins,
    target: "web",
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    }
}
``` 
## License
[MIT](https://choosealicense.com/licenses/mit/)