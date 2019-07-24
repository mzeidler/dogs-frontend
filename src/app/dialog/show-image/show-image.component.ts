import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../service/rest/rest.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/model/video';
import { Image } from 'src/app/model/image';
import { Media } from 'src/app/model/media';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  currentImage: Image;
  currentVideo: Video;
  
  media: Media[];
  index: number;

  constructor(private sanitizer: DomSanitizer, public t: TranslationService, public rest: RestService, public dialogRef: MatDialogRef<ShowImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.media = [];

    this.data.story.images.forEach(i => {
      let m = <Media>{};
      m.image = i;
      m.video = null;
      this.media.push(m);
    });

    this.data.story.videos.forEach(v => {
      let m = <Media>{};
      m.image = null;
      m.video = v;
      this.media.push(m);
    });

    if (this.data.imgIndex >= 0) {
      this.index = this.data.imgIndex;
    } else if (this.data.vidIndex >= 0) {
      this.index = this.data.story.images.length + this.data.vidIndex;
    }

    this.setCurrent();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  getYouTubeVideo(youtubeid: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + youtubeid);
  }

  selectLeft(): void {

    if (this.index > 0) {
      this.index--;
    }

    this.setCurrent();
  }

  selectRight(): void {

    if (this.index < (this.media.length - 1)) {
      this.index++;
    }

    this.setCurrent();
  }

  setCurrent() {
    this.currentImage = this.media[this.index].image;
    this.currentVideo = this.media[this.index].video;
  }
}
