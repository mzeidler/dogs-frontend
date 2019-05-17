import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../translations/translation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RestService } from '../service/rest.service';
import { Image } from '../model/image';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent implements OnInit {

  selectedId = 0;

  constructor(private rest: RestService, private t: TranslationService, public dialogRef: MatDialogRef<ShowDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.dog.images && this.data.dog.images.length > 0) {
      this.selectImage(this.data.dog.images[0]);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  selectImage(image: Image) {
    this.selectedId = image.id;
  }

}
