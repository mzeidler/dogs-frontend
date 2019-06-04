import { Image } from '../model/image';
import { Video } from '../model/video';

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
    videos: Video[];
    titleimage: string;

    de: string;
    en: string;
    hr: string;
}