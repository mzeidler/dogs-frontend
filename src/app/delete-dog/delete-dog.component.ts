import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslationService } from '../translations/translation.service';

@Component({
  selector: 'app-delete-dog',
  templateUrl: './delete-dog.component.html',
  styleUrls: ['./delete-dog.component.css']
})
export class DeleteDogComponent implements OnInit {

  constructor(public t: TranslationService, public dialogRef: MatDialogRef<DeleteDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
