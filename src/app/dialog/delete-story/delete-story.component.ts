import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslationService } from '../../service/translations/translation.service';

@Component({
  selector: 'app-delete-story',
  templateUrl: './delete-story.component.html',
  styleUrls: ['./delete-story.component.css']
})
export class DeleteStoryComponent implements OnInit {

  constructor(public t: TranslationService, public dialogRef: MatDialogRef<DeleteStoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
