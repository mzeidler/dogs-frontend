import { Sortable } from './sortable';
import { Image } from '../model/image';
import { Video } from '../model/video';

export class Story implements Sortable {
    id: number;
    sortid: number;
    type: string;
    title1hr: string;
    title2hr: string;
    title3hr: string;
    title1de: string;
    title2de: string;
    title3de: string;
    opened: boolean;
    images: Image[];
    videos: Video[];
    de: string;
    hr: string;
}