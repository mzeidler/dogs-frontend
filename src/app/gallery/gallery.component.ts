import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translations/translation.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public t: TranslationService) { }

  ngOnInit() {
  }

}
