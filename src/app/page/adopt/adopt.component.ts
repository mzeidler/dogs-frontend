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
import { CommonService } from 'src/app/service/common/common.service';
import { Filter } from 'src/app/model/filter';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  dogs: Dog[];
  filter: Filter;
  updateFilter: Date;

  constructor(
    public dialog: MatDialog, 
    public t: TranslationService, 
    public rest: RestService, 
    public common: CommonService,
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.dogs = this.route.snapshot.data['dogs'];
    this.newFilter();
  }

  update() {
    // redundant because pipe is impure: refactor if performance problem
    this.updateFilter = new Date();
  }

  newFilter() {
    this.filter = <Filter>{};
    this.filter.gender_f = false;
    this.filter.gender_m = false;
    this.filter.size_l = false;
    this.filter.size_m = false;
    this.filter.size_s = false;
    this.filter.age_1 = false;
    this.filter.age_5 = false;
    this.filter.age_10 = false;
  }

  public filterDescription(): string {

    if ((this.filter.gender_m && this.filter.gender_f && this.filter.size_l && this.filter.size_m && this.filter.size_s && this.filter.age_1 && this.filter.age_5 && this.filter.age_10) ||
    (!this.filter.gender_m && !this.filter.gender_f && !this.filter.size_l && !this.filter.size_m && !this.filter.size_s && !this.filter.age_1 && !this.filter.age_5 && !this.filter.age_10)) {
        return this.t.get.filter_showall;
    }

    let genderArray = [];
    if (this.filter.gender_m) genderArray.push(this.t.get.male);
    if (this.filter.gender_f) genderArray.push(this.t.get.female);

    let sizeArray = [];
    if (this.filter.size_s) sizeArray.push(this.t.get.size_s);
    if (this.filter.size_m) sizeArray.push(this.t.get.size_m);
    if (this.filter.size_l) sizeArray.push(this.t.get.size_l);

    let ageArray = [];
    if (this.filter.age_1) ageArray.push(this.t.get.filter_younger_than_m + " 1 " + this.t.get.year);
    if (this.filter.age_5) ageArray.push("1 - 5 " + this.t.get.years);
    if (this.filter.age_10) ageArray.push(this.t.get.filter_older_than_m + " 5 " + this.t.get.years);

    let s = [];

    if (genderArray.length == 0) {
      //s.push(this.t.get.gender + "?");
    } else if (genderArray.length < 2) {
      s.push(genderArray[0]);
    }

    if (sizeArray.length == 0) {
      //s.push(this.t.get.size + "?");
    } else if (sizeArray.length < 3) {
      s.push(sizeArray.join(" " + this.t.get.or + " "));
    }

    if (ageArray.length == 0) {
      //s.push(this.t.get.age + "?");
    } else if (ageArray.length < 3) {
      s.push(ageArray.join(" " + this.t.get.or + " "));
    }

    return s.join(", ");
}

  getDogs(): void {
    this.rest.getDogs().subscribe(dogs => this.dogs = dogs);
  }



  //*************************************************************
  // DELETE DOG
  //*************************************************************
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

  //*************************************************************
  // SELECT DOG
  //*************************************************************
  selectDog(dog: Dog) {

    if (this.rest.currentUserValue) {
      const dialogRef = this.dialog.open(AddDogComponent, {
        width: '950px', data: { 
          dog: {...dog},
          new: false,
          day: moment(this.common.convertToDate(dog.born)),
        }
      });

      dialogRef.afterClosed().subscribe(result => {
    
        if (result) {
          dog.name = result.dog.name;

          if (result.day && !isNaN(result.day)) {
            dog.born = this.common.convertToString(result.day.toDate());          
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


  //*************************************************************
  // ADD DOG
  //*************************************************************
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
          dog.born = this.common.convertToString(result.day.toDate());          
        }
        this.rest.addDog(dog).subscribe(d => {
          this.dogs.push(d);
        });

      }
    });   
  }

}
