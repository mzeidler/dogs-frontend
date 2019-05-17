import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../translations/translation.service';

@Pipe({ 
    name: 'agepipe',
    pure: false 
})
export class AgePipe implements PipeTransform {

    constructor(private t: TranslationService) {
        
    }

    transform(value: any, ...args: any[]) {

        if (value) {

            let born = this.convertToDate(value);
            let today = new Date();

            let days = (today.getTime() - born.getTime()) / (1000 * 3600 * 24);
            let months = days / 30;
            let years = days / 365;
            

            if (days < 0) {
                return "?";
            }

            if (months < 1) {
                return "< 1 " + this.t.get.month;
            }

            if (years < 1) {
                let m = Math.round(months); 

                if (m == 1) {
                    return m + " " + this.t.get.month;
                } else {
                    return m + " " + this.t.get.months;
                }
                
            }

            let y = Math.floor(years);

            if ((years - y) > 0.5) {
                y = y + 0.5;
            }

            if (y == 1) {
                return y + " " + this.t.get.year;
            }

            return y + " " + this.t.get.years;
        }
        
        return "?";
    }


    convertToString(date: Date): string {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
    }

    convertToDate(date: string): Date {
        return new Date(date + "T00:00:00")
    }

}