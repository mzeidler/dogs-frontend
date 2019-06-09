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
}
