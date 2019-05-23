import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../translations/translation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDogComponent } from '../delete-dog/delete-dog.component';
import { RestService } from '../service/rest.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.css']
})
export class CropImageComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;

  constructor(public t: TranslationService, public rest: RestService, public dialogRef: MatDialogRef<CropImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.data.titleimage = this.croppedImage;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady() {
  }

  loadImageFailed() {
  }
}
