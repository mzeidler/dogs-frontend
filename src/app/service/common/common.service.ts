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

}
