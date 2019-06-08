import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslationService } from '../../service/translations/translation.service';
import { RestService } from '../../service/rest/rest.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AddDogComponent } from '../../dialog/add-dog/add-dog.component';
import { Dog } from '../../model/dog';
import * as moment from 'moment';
import { Image } from '../../model/image';
import { ActivatedRoute } from '@angular/router';
import { DeleteDogComponent } from '../../dialog/delete-dog/delete-dog.component';
import { ShowDogComponent } from '../../dialog/show-dog/show-dog.component';
import { DogsResolverService } from '../../service/dogs-resolver/dogs-resolver.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  dogs: Dog[];

  constructor(public dialog: MatDialog, public t: TranslationService, public rest: RestService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.dogs = this.route.snapshot.data['dogs'];
  }

  getDogs(): void {
    this.rest.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  deleteDog(dog: Dog) {
    
    const dialogRef = this.dialog.open(DeleteDogComponent, {
      width: '430px', data: { 
        title: 'Obriši psa'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.rest.deleteDog(dog);
        this.dogs = this.dogs.filter(d => d.id != dog.id);  
      }

    }); 
  
  }

  selectDog(dog: Dog) {

    if (this.rest.currentUserValue) {

      const dialogRef = this.dialog.open(AddDogComponent, {
        width: '950px', data: { 
          dog: {...dog},
          new: false,
          day: moment(this.convertToDate(dog.born)),
        }
      });

      dialogRef.afterClosed().subscribe(result => {
    
        if (result) {
          dog.name = result.dog.name;

          if (result.day && !isNaN(result.day)) {
            dog.born = this.convertToString(result.day.toDate());          
          }

          dog.description = result.dog.description;
          dog.gender = result.dog.gender;
          dog.nutered = result.dog.nutered;
          dog.vaccinated = result.dog.vaccinated;
          dog.weight = result.dog.weight;
          dog.titleimage = result.dog.titleimage;
          dog.de = result.dog.de;
          dog.en = result.dog.en;
          dog.hr = result.dog.hr;
          dog.size = result.dog.size;
          dog.antiparasite = result.dog.antiparasite;
          
          this.rest.addDog(dog).subscribe(d => {

            // update dog images
            this.dogs.forEach(d1 => {
              if (d1.id == d.id) {
                d1.images = d.images;
                d1.videos = d.videos;
              }
            });

          })
        } else {

          // reload dog (images)
          this.rest.getDog(dog.id).subscribe(d => {

            // update dog images
            this.dogs.forEach(d1 => {
              if (d1.id == d.id) {
                d1.images = d.images;
                d1.videos = d.videos;
              }
            });

          });
        }
  
      }); 

    } else {

      const dialogRef = this.dialog.open(ShowDogComponent, {
        width: '100vw',
        maxWidth: '100vw',
        height: '100vh', 
        maxHeight: '100vh',
        panelClass: 'showdogdialog',
        data: { 
          dog: {...dog}
        }
      });  

    }
    
  }


  addDog() {
    
    let dog = <Dog>{};
    dog.images = [];
    dog.videos = [];

    const dialogRef = this.dialog.open(AddDogComponent, {
      width: '950px', data: { 
        dog: {...dog},
        new: true,
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

  convertToString(date: Date): string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return  year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
  }

  convertToDate(date: string): Date {
    return new Date(date + "T00:00:00")
  }
}
