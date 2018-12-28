/**
 * Service to manage library config values
 */
export declare class ConfigService {
    /**
     * Manage to return metric or standard metric values
     * @param unit Metric unit to return value in temperature with celsius or kelvin
     */
    static setUnitMetric(unit: string): "&units=metric" | "";
    /**
     * Define default language use to show description in select language
     * @example
     * setLanguage('es')--> Spanish language
     * setLanguage('ca')--> Catala language
     * @param language { string } Select language code.
     */
    static setLanguage(language: string): string;
    /**
     * Add headers in JSON Format
     * @param json
     */
    static setJsonFormat(): void;
    /**
     * Take options
     * @param jsonValue take JSON format or no
     */
    static options(jsonValue?: boolean): {
        json: boolean;
    };
}
