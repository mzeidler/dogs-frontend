import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from 'src/app/service/rest/rest.service';
import { TranslationService } from 'src/app/service/translations/translation.service';
import { CommonService } from 'src/app/service/common/common.service';
import { AddDogComponent } from '../add-dog/add-dog.component';
import { Image } from '../../model/image';
import { Video } from '../../model/video';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AddVideoComponent } from '../add-video/add-video.component';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  options = [ 
    ["bold", "italic", "underline"],
    [],
    ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
    [ ],
    ["horizontalLine", "orderedList", "unorderedList"],
    ["link"]  
  ];
    
  selectedId = 0;
  selectedImage: Image;

  selectedVideoId = 0;
  selectedVideo: Video;

  progress: { percentage: number } = { percentage: 0 }

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
  
  selectImage(image: Image) {
    this.selectedId = image.id;
    this.selectedImage = image;
  }

  selectVideo(video: Video) {
    this.selectedVideoId = video.id;
    this.selectedVideo = video;
  }  

  moveToLeft() {
    this.common.moveLeft(this.data.story.images, this.selectedId);
  }

  moveVideoToLeft() {
    this.common.moveLeft(this.data.story.videos, this.selectedVideoId);
  }

  moveToRight() {
    this.common.moveRight(this.data.story.images, this.selectedId);
  }

  moveVideoToRight() {
    this.common.moveRight(this.data.story.videos, this.selectedVideoId);
  }

  removePicture() {
    if (this.selectedId) {
      this.rest.deleteImage(this.selectedId);
      this.data.story.images = this.data.story.images.filter(i => i.id != this.selectedId);
      this.selectedId = 0;
    }
  }

  removeVideo() {
    if (this.selectedVideoId) {
      this.rest.deleteVideo(this.selectedVideoId);
      this.data.story.videos = this.data.story.videos.filter(i => i.id != this.selectedVideoId);
      this.selectedVideoId = 0;
    }
  } 


  
  onFileChanged(event) {
    this.progress.percentage = 0;
    let currentFileUpload = event.target.files[0];

    let storyId = 0;
    if (this.data.story.id) {
      storyId = this.data.story.id;
    }

    let sortid = Math.max(...this.data.story.images.map(o => o.sortid), 0) + 1;

    this.rest.uploadStoryImage(currentFileUpload, storyId, sortid).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        let image: Image = JSON.parse(event.body as string);
        //image.url = this.rest.imageUrl + "/" + image.id;
        //this.images.push(image);
        this.data.story.images.push(image);
        this.common.sort(this.data.story.images);
      }
    })
    this.progress.percentage = 0;
  }

  addVideo() {

    const dialogRef = this.dialog.open(AddVideoComponent, {      
      width: '550px',
      data: { 
        name: undefined,
        link: undefined
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result && result.link) {

        //************************************* */
        let storyId = 0;
        if (this.data.story.id) {
          storyId = this.data.story.id;
        }

        let video = <Video>{};
        video.link = result.link;
        video.sortid = Math.max(...this.data.story.videos.map(o => o.sortid), 0) + 1;

        this.rest.addStoryVideo(video, storyId).subscribe(v => {
          this.data.story.videos.push(v);
          this.common.sort(this.data.story.videos);
        });
      }

    });

  }  
}
