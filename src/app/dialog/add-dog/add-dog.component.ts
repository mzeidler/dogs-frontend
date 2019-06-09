import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TranslationService } from '../../service/translations/translation.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { RestService } from '../../service/rest/rest.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Image } from '../../model/image';
import { CropImageComponent } from '../crop-image/crop-image.component';
import { AddVideoComponent } from '../add-video/add-video.component';
import { Video } from '../../model/video';
import { CommonService } from 'src/app/service/common/common.service';

export interface Size {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddDogComponent implements OnInit {

  auto = "auto";
  
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

  sizes: Size[] = [
    {value: 'L', viewValue: this.t.get.size_l },
    {value: 'M', viewValue: this.t.get.size_m },
    {value: 'S', viewValue: this.t.get.size_s }
  ];

  progress: { percentage: number } = { percentage: 0 }

  constructor(
    public dialog: MatDialog, 
    public rest: RestService, 
    public t: TranslationService, 
    public common: CommonService,
    public dialogRef: MatDialogRef<AddDogComponent>, 
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

  setTitleImage(event: any):void {

    const dialogRef = this.dialog.open(CropImageComponent, {
      minHeight: '150px',
      minWidth: '250px',
      data: { 
        uploadedImage: event,
        croppedImage: undefined
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.data.dog.titleimage = result.croppedImage;
      }

    });

  }

  moveToLeft() {
    this.common.moveLeft(this.data.dog.images, this.selectedId);
  }

  moveVideoToLeft() {
    this.common.moveLeft(this.data.dog.videos, this.selectedVideoId);
  }

  moveToRight() {
    this.common.moveRight(this.data.dog.images, this.selectedId);
  }

  moveVideoToRight() {
    this.common.moveRight(this.data.dog.videos, this.selectedVideoId);
  }

  removePicture() {
    if (this.selectedId) {
      this.rest.deleteImage(this.selectedId);
      this.data.dog.images = this.data.dog.images.filter(i => i.id != this.selectedId);
      this.selectedId = 0;
    }
  }


  removeVideo() {
    if (this.selectedVideoId) {
      this.rest.deleteVideo(this.selectedVideoId);
      this.data.dog.videos = this.data.dog.videos.filter(i => i.id != this.selectedVideoId);
      this.selectedVideoId = 0;
    }
  }  

  onFileChanged(event) {
    this.progress.percentage = 0;
    let currentFileUpload = event.target.files[0];

    let dogId = 0;
    if (this.data.dog.id) {
      dogId = this.data.dog.id;
    }

    let sortid = Math.max(...this.data.dog.images.map(o => o.sortid), 0) + 1;

    this.rest.pushFileToStorage(currentFileUpload, dogId, sortid).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        let image: Image = JSON.parse(event.body as string);
        //image.url = this.rest.imageUrl + "/" + image.id;
        //this.images.push(image);
        this.data.dog.images.push(image);
        this.common.sort(this.data.dog.images);
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

        let dogid = 0;
        if (this.data.dog.id) {
          dogid = this.data.dog.id;
        }

        let video = <Video>{};
        video.link = result.link;
        video.sortid = Math.max(...this.data.dog.videos.map(o => o.sortid), 0) + 1;

        this.rest.addVideo(video, dogid).subscribe(v => {
          this.data.dog.videos.push(v);
          this.common.sort(this.data.dog.videos);
        });
      }

    });

  }
}
