import { Pipe, PipeTransform } from "@angular/core";
import { Image } from '../model/image';
import { Dog } from '../model/dog';
import { Filter } from '../model/filter';
import { CommonService } from '../service/common/common.service';

@Pipe({
    name: 'dogfilter', pure: false
})

export class DogFilter implements PipeTransform {

    filter: Filter;

    constructor(private common: CommonService) {}

    transform(dogs: Array<Dog>, ...args: any[]): Array<Dog> {

        this.filter = args[0];

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
        

        if (!this.filter.age_1 || !this.filter.age_5 || !this.filter.age_10) {
            dogs = dogs.filter(dog => {
                let years = this.common.ageInYears(dog.born);

                if (!this.filter.age_10 && years > 5) {
                    // Do not show dogs older than 5 years
                    return false;
                }

                if (!this.filter.age_1 && years < 1) {
                    // Do not show dogs younger than 1 year
                    return false;
                }
                
                if (!this.filter.age_5 && (years > 1 && years < 5)) {
                    // Do not show dogs with age between 1 and 5
                    return false;
                }

                return true;
                
            });
        }

        return dogs;

    }

}