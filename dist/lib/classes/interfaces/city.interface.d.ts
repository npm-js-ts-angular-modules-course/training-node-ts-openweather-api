import { Location } from './location.interface';
/**
 * @ignore
 */
export interface City {
    name: string;
    country: string;
    location: Location;
    zip?: string;
}
