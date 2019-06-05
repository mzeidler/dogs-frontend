import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../translations/translation.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { RestService } from '../service/rest.service';
import { Image } from '../model/image';
import { Message } from '../model/message';
import { Video } from '../model/video';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer, private rest: RestService, private snackBar: MatSnackBar, public t: TranslationService, public dialogRef: MatDialogRef<ShowDogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    let hasImages = false;
    let hasVideos = false;

    if (this.data.dog.images && this.data.dog.images.length > 0) {

      this.data.dog.images.sort((a: Image, b: Image) => {
        return b.sortid - a.sortid;
      });

      hasImages = true;      
    }

    if (this.data.dog.videos && this.data.dog.videos.length > 0) {

      this.data.dog.videos.sort((a: Video, b: Video) => {
        return b.sortid - a.sortid;
      });

      hasVideos = true;      
    }

    if (hasImages) {
      this.selectImage(this.data.dog.images[0]);
    } else if (hasVideos) {
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
