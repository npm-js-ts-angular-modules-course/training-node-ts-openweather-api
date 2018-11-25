import { API_URL } from './../../constants/environments';

export class RequestService {

    getQuery(query: string, jsonValue: boolean = true) {
        console.log(`${ API_URL }${ query }`);
        var options = {
            uri: `${ API_URL}${ query }` ,
            json: jsonValue // Para devolver un JSON o no
        };
        return options;
    }
}