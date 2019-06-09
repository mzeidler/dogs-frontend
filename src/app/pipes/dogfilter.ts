import { Pipe, PipeTransform } from "@angular/core";
import { Image } from '../model/image';
import { Dog } from '../model/dog';
import { Filter } from '../model/filter';
import { CommonService } from '../service/common/common.service';

@Pipe({
    name: 'dogfilter', pure: false
})

export class DogFilter implements PipeTransform {


    constructor(private common: CommonService) {}

    transform(dogs: Array<Dog>, ...args: any[]): Array<Dog> {

        let filter = args[0];

        dogs = dogs.filter(dog => {
            return this.matchesGender(dog, filter) && this.matchesSize(dog, filter) && this.matchesAge(dog, filter);
        });

        return dogs;
    }


    matchesGender(dog: Dog, filter: Filter): boolean {

        let m = filter.gender_m;
        let f = filter.gender_f;

        let val = dog.gender;

        if (!m && !f) {
            return true;
        }

        if (m && f) {
            return val != undefined;
        }

        if ((m && val == 'M') || (f && val == 'F')) {
            return true;
        }

        return false;
    }

    matchesSize(dog: Dog, filter: Filter): boolean {

        let l = filter.size_l;
        let m = filter.size_m;
        let s = filter.size_s;

        let val = dog.size;

        if (!l && !m && !s) {
            return true;
        }

        if (l && m && s) {
            return dog.size != undefined;
        }

        if ((l && val == 'L') || (m && val == 'M') || (s && val == 'S')) {
            return true;
        }

        return false;
    }   

    matchesAge(dog: Dog, filter: Filter): boolean {

        let a1 = filter.age_1;
        let a5 = filter.age_5;
        let a10 = filter.age_10;

        let val = this.common.ageInYears(dog.born);

        if (!a1 && !a5 && !a10) {
            return true;
        }
        
        if (a1 && a5 && a10) {
            return val > 0;
        }

        if ((a1 && val < 1) || (a5 && (val > 1 && val < 5)) || (a10 && val > 5)) {
            return true;
        }

        return false;
    } 
}