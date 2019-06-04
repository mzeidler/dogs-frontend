import { Pipe, PipeTransform } from "@angular/core";
import { Video } from '../model/video';

@Pipe({
    name: 'videosort'
})

export class VideoSort implements PipeTransform {

    transform(array: Array<Video>): Array<Video> {

        array.sort((a: Video, b: Video) => {
            return b.sortid - a.sortid;
        });

        return array;

    }

}