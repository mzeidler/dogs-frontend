import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translations/translation.service';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public t: TranslationService, public rest: RestService) { }

  ngOnInit() {
  }

}
