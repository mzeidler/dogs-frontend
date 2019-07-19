import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../service/rest/rest.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, public t: TranslationService, public rest: RestService, public dialogRef: MatDialogRef<ShowImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  getYouTubeVideo(youtubeid: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + youtubeid);
  }

}
