import { Pipe, PipeTransform } from "@angular/core";
import { Image } from '../model/image';

@Pipe({
    name: 'imagesort'
})

export class ImageSort implements PipeTransform {

    transform(array: Array<Image>): Array<Image> {

        array.sort((a: Image, b: Image) => {
            return b.sortid - a.sortid;
        });

        return array;

    }

}