import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TranslationService } from '../translations/translation.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { RestService } from '../service/rest.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Image } from '../model/image';
import { SelectionModel } from '@angular/cdk/collections';
import { CropImageComponent } from '../crop-image/crop-image.component';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddDogComponent implements OnInit {

  selectedId = 0;
  selectedImage: Image;

  progress: { percentage: number } = { percentage: 0 }

  constructor(public dialog: MatDialog, public rest: RestService, public t: TranslationService, public dialogRef: MatDialogRef<AddDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectImage(image: Image) {
    this.selectedId = image.id;
    this.selectedImage = image;
  }

  setTitleImage(event: any):void {

    const dialogRef = this.dialog.open(CropImageComponent, {
      minHeight: '150px',
      minWidth: '250px',
      data: { 
        uploadedImage: event,
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        // TODO: Under Construction
        console.log("MARKOTEST:" + result.croppedImage);
      }

    });

  }

  moveToLeft() {

    if (this.data.dog.images.length > 1) {

      for (var _i = 1; _i < this.data.dog.images.length; _i++) {
        if (this.data.dog.images[_i].id == this.selectedId) {
          let tmp = this.data.dog.images[_i].sortid;
          this.data.dog.images[_i].sortid = this.data.dog.images[_i - 1].sortid;
          this.data.dog.images[_i - 1].sortid = tmp;
          break;
        }
      }

      this.sortImages();  
    }

  }

  moveToRight() {
    
    if (this.data.dog.images.length > 1) {

      for (var _i = 0; _i < this.data.dog.images.length - 1; _i++) {
        if (this.data.dog.images[_i].id == this.selectedId) {
          let tmp = this.data.dog.images[_i].sortid;
          this.data.dog.images[_i].sortid = this.data.dog.images[_i + 1].sortid;
          this.data.dog.images[_i + 1].sortid = tmp;
          break;
        }
      }

      this.sortImages();
    }
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

    let sortid = Math.max(...this.data.dog.images.map(o => o.sortid), 0) + 1;

    this.rest.pushFileToStorage(currentFileUpload, dogId, sortid).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        let image: Image = JSON.parse(event.body as string);
        //image.url = this.rest.imageUrl + "/" + image.id;
        //this.images.push(image);
        this.data.dog.images.push(image);
        this.sortImages();
      }
    })
    this.progress.percentage = 0;
  }

  sortImages() {
    this.data.dog.images.sort((a: Image, b: Image) => {
      return b.sortid - a.sortid;
    });
  }
}
