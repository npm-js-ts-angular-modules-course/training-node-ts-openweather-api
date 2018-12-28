import { AVAILABLE_LANGS } from './../../../constants/languages';
import axios from 'axios';

/**
 * Service to manage library config values
 */
export class ConfigService {
    /**
     * Manage to return metric or standard metric values
     * @param unit Metric unit to return value in temperature with celsius or kelvin
     */
    public static setUnitMetric(unit: string) {
        if (unit === 'm' || unit === 'metres') {
            return `&units=metric`;
        }
        return ``;
    }

    /**
     * Define default language use to show description in select language
     * @example
     * setLanguage('es')--> Spanish language
     * setLanguage('ca')--> Catala language
     * @param language { string } Select language code.
     */
    public static setLanguage(language: string) {
        
        if (language === '' || AVAILABLE_LANGS.find( (lang: any) => lang === language ) === undefined) {
            return ``;
        }
        return `&lang=${language}`;
    }

    /**
     * Add headers in JSON Format
     * @param json 
     */
    public static setJsonFormat() {
        axios.defaults.headers.get['Content-Type'] = 'application/json';
    }

    /**
     * Take options
     * @param jsonValue take JSON format or no
     */
    public static options(jsonValue: boolean = true) {
        /*
        qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
            },
        headers: {
                'User-Agent': 'Rx-Http-Request'
            },*/
        const options = {
            json: jsonValue // Automatically parses the JSON string in the response
        };
        return options;
    }
}