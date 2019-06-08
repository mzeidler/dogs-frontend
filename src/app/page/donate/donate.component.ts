import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../translations/translation.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(public t: TranslationService) { }

  ngOnInit() {
  }

}
