import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translations/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private t: TranslationService) { }

  ngOnInit() {
  }


}
