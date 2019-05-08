import { Injectable } from '@angular/core';
import { Hr, En, De } from './translation';
import { Translation } from './translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public get: Translation;


  constructor() { 
    this.setLang(localStorage.getItem("lang"));
  }

  setLang(lang: string) {
    if (lang) {
      if (lang == 'De') {
        this.get = new De();
      } else if (lang == 'Hr') {
        this.get = new Hr(); 
      } else if (lang == 'En') {
        this.get = new En(); 
      }
    } else {
      this.get = new De(); // default
    }

    localStorage.setItem("lang", lang);
  }
}
