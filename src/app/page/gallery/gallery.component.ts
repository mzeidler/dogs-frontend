import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../service/translations/translation.service';
import { RestService } from 'src/app/service/rest/rest.service';
import { Story } from 'src/app/model/story';
import { MatDialog } from '@angular/material';
import { AddStoryComponent } from 'src/app/dialog/add-story/add-story.component';
import { ActivatedRoute } from '@angular/router';
import { DeleteStoryComponent } from 'src/app/dialog/delete-story/delete-story.component';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  stories: Story[];

  constructor(public t: TranslationService, public rest: RestService, public dialog: MatDialog, private route: ActivatedRoute, public common: CommonService) { }

  ngOnInit() {
    this.stories = this.route.snapshot.data['shelterStories'];
  }

  getStories(): void {
    this.rest.getStories("SHELTER").subscribe(stories => this.stories = stories);
  }

  addStory() {

    let story = <Story>{};
    story.type = "SHELTER";
    story.images = [];
    story.videos = [];

    const dialogRef = this.dialog.open(AddStoryComponent, {
      width: '950px', height: '600px', data: { 
        title: this.t.get.add_story_shelter,
        story: {...story},
        new: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        story = result.story;
        let sortid = Math.max(...this.stories.map(o => o.sortid), 0) + 1;
        story.sortid = sortid;
        this.rest.saveStory(story).subscribe(s => {
          this.stories.push(s);
        });
      }
    }); 
  }

  upStory(story: Story) {
    this.common.moveLeft(this.stories, story.id);
    this.rest.sortStories(this.stories).subscribe();
  }

  downStory(story: Story) {
    this.common.moveRight(this.stories, story.id);
    this.rest.sortStories(this.stories).subscribe();
  }

  deleteStory(story: Story) {

    const dialogRef = this.dialog.open(DeleteStoryComponent, {
      width: '430px', data: { 
        title: 'Obriši priču'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rest.deleteStory(story.id);
        this.stories = this.stories.filter(s => s.id != story.id);  
      }
    }); 

  }

  editStory(story: Story) {

    const dialogRef = this.dialog.open(AddStoryComponent, {
      width: '950px', height: '600px', data: { 
        title: this.t.get.edit_story_shelter,
        story: {...story},
        new: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        story.title1de = result.story.title1de;
        story.title2de = result.story.title2de;
        story.title3de = result.story.title3de;
        story.title1hr = result.story.title1hr;
        story.title2hr = result.story.title2hr;
        story.title3hr = result.story.title3hr;
        story.de = result.story.de;
        story.hr = result.story.hr;
        story.opened = result.story.opened;

        this.rest.saveStory(story).subscribe(s => {

            // update story images
            this.stories.forEach(s1 => {
              if (s1.id == s1.id) {
                s1.images = s.images;
                s1.videos = s.videos;
              }
            });

        });

      }
    });



  }

}
