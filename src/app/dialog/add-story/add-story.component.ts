import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from 'src/app/service/rest/rest.service';
import { TranslationService } from 'src/app/service/translations/translation.service';
import { CommonService } from 'src/app/service/common/common.service';
import { AddDogComponent } from '../add-dog/add-dog.component';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    public rest: RestService, 
    public t: TranslationService, 
    public common: CommonService,
    public dialogRef: MatDialogRef<AddStoryComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
