import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private userUrl = `//${environment.resturl}:9002/api/user`;

  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl + "/authenticate", user, httpOptions).pipe(
      catchError(this.handleError<User>('updateUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
