import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../translations/translation.service';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public t: TranslationService, public rest: RestService) { 
    
  }

  ngOnInit() {
  }


}
