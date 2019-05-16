import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslationService } from '../translations/translation.service';
import { RestService } from '../service/rest.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AddDogComponent } from '../add-dog/add-dog.component';
import { Dog } from '../model/dog';
import * as moment from 'moment';
import { Image } from '../model/image';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  images: Image[]; // TODO: remove

  dogId = 1; // TODO: remove

  dogs: Dog[];

  progress: { percentage: number } = { percentage: 0 } // TODO: remove

  constructor(public dialog: MatDialog, private t: TranslationService, private rest: RestService, private route: ActivatedRoute) { 
    this.images = []; // TODO: remove
  }

  ngOnInit() {
    this.dogs = this.route.snapshot.data['dogs'];
  }

  getDogs(): void {
    this.rest.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  deleteDog(dog: Dog) {
    this.rest.deleteDog(dog);
    this.dogs = this.dogs.filter(d => d.id != dog.id);    
  }

  addDog() {
    
    let dog = <Dog>{};

    const dialogRef = this.dialog.open(AddDogComponent, {
      width: '650px', data: { 
        dog: {...dog},
        day: undefined,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        dog = result.dog;
        if (result.day) {
          dog.born = this.convertToString(result.day.toDate());          
        }
        this.rest.addDog(dog).subscribe(d => {
          this.dogs.push(d);
        });

      }
    });   
  }


  onFileChanged(event) {
    this.progress.percentage = 0;
    let currentFileUpload = event.target.files[0];
    this.rest.pushFileToStorage(currentFileUpload, this.dogId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        let image: Image = JSON.parse(event.body as string);
        image.url = this.rest.imageUrl + "/" + image.id;
        this.images.push(image);
      }
    })
    this.progress.percentage = 0;
  }


  convertToString(date: Date): string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return  year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
  }
}
