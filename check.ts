import { Result } from './lib/classes/interfaces/api.interface';
import { ApiService } from './lib/classes/services/api.service';


const api = new ApiService('ec32f42ea9357dae4e8e8dbc6d0f77f9');
api.getCurrentWeatherByCity('Las Vegas').then( (value: Result) => {
        console.log('***********By Name ****************');
        console.log(value.weather);
    }
);

api.getCurrentWeatherByLocation({lat: 36.1699412, lng: -115.13982959999998}).then( (value: Result) => {
        console.log('***********By Location ****************');
        console.log(value);
    }
);

api.getCurrentWeatherByZip('89104').then( (value: Result) => {
        console.log('***********By Zip ****************');
        console.log(value);
    }   
);