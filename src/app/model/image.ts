import { Sortable } from './sortable';

export class Image implements Sortable {
    id: number;
    name: string;
    size: number;
    sortid: number;
    height: number;
    width: number;
}