import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RestService } from '../rest/rest.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShelterStoryResolverService implements Resolve<any> {

  constructor(private rest: RestService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<any> {
    return this.rest.getStories("SHELTER");
  }

}
