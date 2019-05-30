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

  msg_email: string;
  msg_text: string;

  selectedId = 0;

  constructor(private rest: RestService, public t: TranslationService, public dialogRef: MatDialogRef<ShowDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.dog.images && this.data.dog.images.length > 0) {

      this.data.dog.images.sort((a: Image, b: Image) => {
        return b.sortid - a.sortid;
      });

      this.selectImage(this.data.dog.images[0]);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  selectImage(image: Image) {
    this.selectedId = image.id;
  }

  sendMessage() {
    console.log("message: " + this.msg_text);
  }

}
