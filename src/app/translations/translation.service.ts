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
    switch(lang) {
      case 'De': this.get = new De(); break;
      case 'Hr': this.get = new Hr(); break;
      case 'En': this.get = new En(); break;
      default: this.get = new De(); break;
    }

    localStorage.setItem("lang", lang);
  }

  changeLang() {
    let lang = localStorage.getItem("lang");
    switch(lang) {
      case 'De': this.setLang('Hr'); break;
      case 'Hr': this.setLang('En'); break;
      case 'En': this.setLang('De'); break;
      default: this.setLang('De'); break;
    }
  }
}
