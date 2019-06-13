import { Sortable } from './sortable';

export class Video implements Sortable {
    id: number;
    name: string;
    description: string;
    youtubeid: string;
    link: number;
    sortid: number;
}