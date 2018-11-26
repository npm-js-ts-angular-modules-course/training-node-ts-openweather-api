import { AVAILABLE_LANGS } from './../../../constants/languages';
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
}