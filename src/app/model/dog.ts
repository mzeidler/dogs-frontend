import { Image } from '../model/image';

export class Dog {
    id: number;
    name: string;
    gender: string;
    weight: number;
    born: string;
    nutered: boolean;
    vaccinated: boolean;
    description: string;
    images: Image[];
    titleimage: string;
}