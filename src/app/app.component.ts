import { Component } from '@angular/core';
import { TranslationService } from './translations/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dogs-frontend';

  constructor(private t: TranslationService) { }

  setLang(lang: string) {
    this.t.setLang(lang);
  }

  en(): boolean {
    let lang = localStorage.getItem('lang');
    return lang == 'En';
  }

  hr(): boolean {
    let lang = localStorage.getItem('lang');
    return lang == 'Hr';
  }

  de(): boolean {
    let lang = localStorage.getItem('lang');
    return lang == 'De';
  }

}
