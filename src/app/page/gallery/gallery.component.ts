import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';
import { RestService } from 'src/app/service/rest/rest.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public t: TranslationService, public rest: RestService) { }

  ngOnInit() {
  }

  addStory() {
    console.log("Add Story");
  }

  getStories() {
    console.log("Get Stories");
  }

}
