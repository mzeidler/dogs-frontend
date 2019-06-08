import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(public t: TranslationService) { }

  ngOnInit() {
  }

}
