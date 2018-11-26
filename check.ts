import { Result } from './lib/classes/interfaces/api.interface';
import { ApiService } from './lib/classes/services/api/api.service';

const api = new ApiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');
/*api.getCurrentWeather('city', ['Madrid,uk', true]).then( (value: Result) => {
    console.log('***********By Name ****************');
    console.log(value);
}
).catch(error => {
console.log('***********By Name ****************');
console.log(error.response.body);
}
);

api.getCurrentWeather('city', ['Barcelona,es', true]).then( (value: Result) => {
    console.log('***********By Name ****************');
    console.log(value);
}
).catch(error => {
console.log('***********By Name ****************');
console.log(error.response.body);
}
);


api.getCurrentWeather('location', [{lat: 36.1699412, lng: -115.13982959999998}, true]).then( (value: Result) => {
    console.log('***********By Location ****************');
    console.log(value);
}
).catch(error => {
    console.log(error.response.body);
}
);*/

api.getCurrentWeather('zip', ['89104', true]).subscribe(
    (data) => {
        console.log(data);
        if (data.response.statusCode === 200) {
            console.log(data.body); // Show the HTML for the Google homepage.
        }
    },
    (err) => console.error(err) // Show error in console);
);