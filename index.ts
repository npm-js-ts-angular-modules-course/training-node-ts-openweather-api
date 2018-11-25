import { ApiService } from './classes/services/api.service';

export * from './classes/services/api.service';

const api = new ApiService('58dda22dc16b4ec458a95a0a7f2e921d');
console.log(api.getCurrentWeatherInLondon);