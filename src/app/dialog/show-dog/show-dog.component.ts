import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { RestService } from '../../service/rest/rest.service';
import { Image } from '../../model/image';
import { Message } from '../../model/message';
import { Video } from '../../model/video';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent implements OnInit {

  msg_email: string;
  msg_text: string;

  selectedId = 0;
  selectedVideoId = 0;
  youtubeid: string;

  constructor(
    private sanitizer: DomSanitizer, 
    private common: CommonService,
    private rest: RestService, 
    private snackBar: MatSnackBar, 
    public t: TranslationService, 
    public dialogRef: MatDialogRef<ShowDogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.common.sort(this.data.dog.images);
    this.common.sort(this.data.dog.videos);

    if (this.common.hasItems(this.data.dog.images)) {
      this.selectImage(this.data.dog.images[0]);
    } else if (this.common.hasItems(this.data.dog.videos)) {
      this.selectVideo(this.data.dog.videos[0]);
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  selectImage(image: Image) {
    this.selectedId = image.id;
    this.selectedVideoId = 0;
  }

  getYouTubeVideo() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.youtubeid);
  }

  selectVideo(video: Video) {
    this.selectedVideoId = video.id;
    this.youtubeid = video.youtubeid;
    this.selectedId = 0;
  }

  sendMessage() {

    let msg = <Message>{};
    msg.email = this.msg_email;
    msg.message = this.msg_text;
    msg.dogId = this.data.dog.id;

    this.rest.message(msg).subscribe();

    this.msg_text = undefined;
    this.msg_email = undefined;

    this.snackBar.open(this.t.get.msg_ok,undefined, {
      duration: 2000
  });

  }

}
