import { Location } from './location.interface';

/**
 * One city interface definition
 */
export interface City {
    name: string;
    country: string;
    location: Location;
    zip?: string;
}