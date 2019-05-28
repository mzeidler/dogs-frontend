import { Image } from '../model/image';

export class Dog {
    id: number;
    name: string;
    gender: string;
    size: string;
    weight: number;
    born: string;
    nutered: boolean;
    vaccinated: boolean;
    antiparasite: boolean;
    description: string;
    images: Image[];
    titleimage: string;

    de: string;
    en: string;
    hr: string;
}