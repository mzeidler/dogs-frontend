import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../../model/user';
import { catchError, map, tap } from 'rxjs/operators';
import { Dog } from '../../model/dog';
import { Message } from '../../model/message';
import { Video } from '../../model/video';
import { Story } from 'src/app/model/story';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private dogUrl = `//${environment.resturl}:9002/api/dog`;

  private dogsUrl = `//${environment.resturl}:9002/api/dogs`;

  private userUrl = `//${environment.resturl}:9002/api/user`;

  private uploadUrl = `//${environment.resturl}:9002/api/upload`;

  public imageUrl = `//${environment.resturl}:9002/api/image`;

  public messageUrl = `//${environment.resturl}:9002/api/message`;

  public videoUrl = `//${environment.resturl}:9002/api/video`;

  private storyUrl = `//${environment.resturl}:9002/api/story`;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentDogsUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

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

  pushFileToStorage(file: File, dogId: number, sortid: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.uploadUrl + "/" + dogId + "/" + sortid, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }


  login(username: string, password: string): Observable<boolean> {

    let user = <User>{};
    user.username = username;
    user.password = password;

    let subject = new Subject<boolean>();
    this.authenticateUser(user).subscribe(authenticatedUser => {
      if (authenticatedUser) {
        localStorage.setItem('currentDogsUser', JSON.stringify(authenticatedUser));
        this.currentUserSubject.next(authenticatedUser);
        subject.next(true);
      } else {
        subject.next(false);
      }

      subject.complete();
    });

    return subject;
  }

  logout() {
    localStorage.removeItem('currentDogsUser');
    this.currentUserSubject.next(null);
  }


  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl).pipe(
      catchError(this.handleError('getDogs', []))
    );
  }

  getDog(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.dogUrl}/${id}`).pipe(
      catchError(this.handleError<Dog>(`getDog id=${id}`))
    );
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.dogUrl + "/save", dog, httpOptions).pipe(
      catchError(this.handleError<Dog>('addUser'))
    );
  }

  deleteDog(dog: Dog) {
    return this.http.delete(this.dogUrl + "/delete/" + dog.id, httpOptions).subscribe();
  } 

  deleteImage(id: number) {
    return this.http.delete(this.imageUrl + "/delete/" + id, httpOptions).subscribe();
  } 

  message(message: Message) {
    return this.http.post(this.messageUrl, message, httpOptions).pipe(
      catchError(this.handleError<Dog>('message'))
    );
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messageUrl).pipe(
      catchError(this.handleError('getMessages', []))
    );
  }

  deleteMessage(id: number) {
    return this.http.delete(this.messageUrl + "/" + id, httpOptions).subscribe();
  } 

  getVideo(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.videoUrl}/${id}`).pipe(
      catchError(this.handleError<Video>(`getVideo id=${id}`))
    );
  }

  addVideo(video: Video, dogid: number): Observable<Video> {
    return this.http.post<Video>(this.videoUrl + "/" + dogid, video, httpOptions).pipe(
      catchError(this.handleError<Video>('addVideo'))
    );
  }
 
  deleteVideo(id: number) {
    return this.http.delete(this.videoUrl + "/delete/" + id, httpOptions).subscribe();
  } 

  getStories(type: string): Observable<Story[]> {
    return this.http.get<Story[]>(this.storyUrl + "/" + type).pipe(
      catchError(this.handleError('getStories', []))
    );
  }

  getStory(id: number): Observable<Story> {
    return this.http.get<Story>(`${this.storyUrl}/${id}`).pipe(
      catchError(this.handleError<Story>(`getStory id=${id}`))
    );
  }

  saveStory(story: Story): Observable<Story> {
    return this.http.post<Story>(this.storyUrl + "/save", story, httpOptions).pipe(
      catchError(this.handleError<Story>('saveStory'))
    );
  }

  deleteStory(id: number) {
    return this.http.delete(this.storyUrl + "/delete/" + id, httpOptions).subscribe();
  } 

}
