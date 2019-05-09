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

}
