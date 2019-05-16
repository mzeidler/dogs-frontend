import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../translations/translation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent implements OnInit {

  constructor(private t: TranslationService, public dialogRef: MatDialogRef<ShowDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
