import { Pipe, PipeTransform } from "@angular/core";
import { Image } from '../model/image';
import { Dog } from '../model/dog';
import { Filter } from '../model/filter';

@Pipe({
    name: 'dogfilter'
})

export class DogFilter implements PipeTransform {

    filter: Filter;

    transform(dogs: Array<Dog>, ...args: any[]): Array<Dog> {

        // filter

        this.filter = args[0];

        console.log("FILTER: gender_m=" + this.filter.gender_m);

        return dogs;

    }

}