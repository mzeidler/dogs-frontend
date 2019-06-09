import { Injectable } from '@angular/core';
import { Sortable } from 'src/app/model/sortable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  sort(array: Sortable[]) {
    if (this.hasItems(array)) {
      array.sort((a: Sortable, b: Sortable) => {
        return b.sortid - a.sortid;
      });
    }
  }

  hasItems(array: any[]) {
    return array && array.length > 0;
  }

  moveLeft(array: Sortable[], id: number) {
    if (array.length > 1) {

      for (var _i = 1; _i < array.length; _i++) {
        if (array[_i].id == id) {
          let tmp = array[_i].sortid;
          array[_i].sortid = array[_i - 1].sortid;
          array[_i - 1].sortid = tmp;
          break;
        }
      }

      this.sort(array);
    }
  }

  moveRight(array: Sortable[], id: number) {
    if (array.length > 1) {

      for (var _i = 0; _i < array.length - 1; _i++) {
        if (array[_i].id == id) {
          let tmp = array[_i].sortid;
          array[_i].sortid = array[_i + 1].sortid;
          array[_i + 1].sortid = tmp;
          break;
        }
      }

      this.sort(array);
    }
  }

  convertToString(date: Date): string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return  year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
  }

  convertToDate(date: string): Date {
    return new Date(date + "T00:00:00")
  }

  public ageInYears(born: string): number {
    if (born) {
      let now = new Date();
      let date = this.convertToDate(born);
      var diff = Math.abs(now.getTime() - date.getTime());
      return diff / (1000 * 3600 * 24 * 365);
    }
    return 0;       
  }
}
