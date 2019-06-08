import { Injectable } from '@angular/core';
import { Sortable } from 'src/app/model/sortable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  sort(array: Sortable[]) {
    array.sort((a: Sortable, b: Sortable) => {
      return b.sortid - a.sortid;
    });
  }
}
