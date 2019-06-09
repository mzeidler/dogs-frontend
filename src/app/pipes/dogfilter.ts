import { Pipe, PipeTransform } from "@angular/core";
import { Image } from '../model/image';
import { Dog } from '../model/dog';
import { Filter } from '../model/filter';

@Pipe({
    name: 'dogfilter', pure: false
})

export class DogFilter implements PipeTransform {

    filter: Filter;

    transform(dogs: Array<Dog>, ...args: any[]): Array<Dog> {

        this.filter = args[0];

        //console.log("FILTER: gender_m=" + this.filter.gender_m + ", gender_f=" + this.filter.gender_f);

        if (!this.filter.gender_m) {
            dogs = dogs.filter(dog => dog.gender && dog.gender != 'M');
        }

        if (!this.filter.gender_f) {
            dogs = dogs.filter(dog => dog.gender && dog.gender != 'F');
        }

        if (!this.filter.size_l) {
            dogs = dogs.filter(dog => dog.size && dog.size != 'L');
        }

        if (!this.filter.size_m) {
            dogs = dogs.filter(dog => dog.size && dog.size != 'M');
        }
        
        if (!this.filter.size_s) {
            dogs = dogs.filter(dog => dog.size && dog.size != 'S');
        }
        
        if (!this.filter.age_1) {

        }

        if (!this.filter.age_5) {

        }

        if (!this.filter.age_10) {
            
        }

        return dogs;

    }

}