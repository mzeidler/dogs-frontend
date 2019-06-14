import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';
import { RestService } from 'src/app/service/rest/rest.service';
import { Story } from 'src/app/model/story';
import { MatDialog } from '@angular/material';
import { AddDogComponent } from 'src/app/dialog/add-dog/add-dog.component';
import { AddStoryComponent } from 'src/app/dialog/add-story/add-story.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  stories: Story[];

  constructor(public t: TranslationService, public rest: RestService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  addStory() {

    let story = <Story>{};
    story.type = "SHELTER";
    story.images = [];
    story.videos = [];

    const dialogRef = this.dialog.open(AddStoryComponent, {
      width: '950px', data: { 
        title: this.t.get.add_story_shelter,
        dog: {...story},
        new: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement
      }
    }); 
  }

  getStories() {
    console.log("Get Stories");
  }

}
