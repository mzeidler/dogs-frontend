import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translations/translation.service';
import { RestService } from '../service/rest.service';
import { restoreView } from '@angular/core/src/render3';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Image } from '../model/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Image[];

  dogId = 1;

  progress: { percentage: number } = { percentage: 0 }
  
  constructor(private t: TranslationService, private rest: RestService) { 
    this.images = [];
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.progress.percentage = 0;
    let currentFileUpload = event.target.files[0];
    this.rest.pushFileToStorage(currentFileUpload, this.dogId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        let image: Image = JSON.parse(event.body as string);
        image.url = this.rest.imageUrl + "/" + image.id;
        this.images.push(image);
      }
    })
    this.progress.percentage = 0;
  }
}
