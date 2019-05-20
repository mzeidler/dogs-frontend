import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslationService } from '../translations/translation.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { RestService } from '../service/rest.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Image } from '../model/image';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}, 
  ],
})
export class AddDogComponent implements OnInit {

  selectedId = 0;

  progress: { percentage: number } = { percentage: 0 }

  constructor(private rest: RestService, private t: TranslationService, public dialogRef: MatDialogRef<AddDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectImage(id) {
    this.selectedId = id;
  }

  setVisibility() {

  }

  moveToLeft() {

  }

  moveToRight() {

  }

  removePicture() {
    if (this.selectedId) {
      this.rest.deleteImage(this.selectedId);
      this.data.dog.images = this.data.dog.images.filter(i => i.id != this.selectedId);  
    }
  }

  onFileChanged(event) {
    this.progress.percentage = 0;
    let currentFileUpload = event.target.files[0];

    let dogId = 0;
    if (this.data.dog.id) {
      dogId = this.data.dog.id;
    }

    this.rest.pushFileToStorage(currentFileUpload, dogId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        let image: Image = JSON.parse(event.body as string);
        //image.url = this.rest.imageUrl + "/" + image.id;
        //this.images.push(image);
        this.data.dog.images.push(image);
      }
    })
    this.progress.percentage = 0;
  }
}
