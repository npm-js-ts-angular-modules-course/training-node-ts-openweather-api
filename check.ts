import { CurrentService } from './lib/classes/services/weather/current.service';
import { ApiService } from './lib/classes/services/api/api.service';

const api = new ApiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');

/*api.getCurrentWeather('city', ['Barcelona,es', true]).subscribe(
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
);*/

const current = new CurrentService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'metric', 'es');
current.getTest('Barcelona,es', true)