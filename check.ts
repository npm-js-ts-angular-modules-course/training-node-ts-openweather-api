import { Result } from './lib/classes/interfaces/openweather.interface';
import { ApiService } from './lib/classes/services/api.service';


const api = new ApiService('ec32f42ea9357dae4e8e8dbc6d0f77f9');
api.getCurrentWeatherInSelectCityByName('Roma').then( (value: Result) =>
    console.log(value.weather)
);