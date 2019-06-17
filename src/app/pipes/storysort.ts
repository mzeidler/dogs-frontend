import { Pipe, PipeTransform } from "@angular/core";
import { Image } from '../model/image';
import { Story } from '../model/story';

@Pipe({
    name: 'storysort', pure: false
})

export class StorySort implements PipeTransform {

    transform(array: Array<Story>): Array<Story> {

        array.sort((a: Story, b: Story) => {
            return b.sortid - a.sortid;
        });

        return array;

    }

}