import { Location } from './location.interface';
export interface City {
    name: string;
    country: string;
    location: Location;
    zip?: string;
}