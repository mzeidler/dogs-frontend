import { Component } from '@angular/core';
import { TranslationService } from './translations/translation.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './dialog/login/login.component';
import { RestService } from './service/rest/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dogs-frontend';

  constructor(
    public t: TranslationService, 
    public rest: RestService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  login() {

    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px', data: { 
        username: undefined,
        password: undefined
      }
    });

    dialogRef.afterClosed().subscribe(result => {    
      if (result) {
        this.rest.login(result.username, result.password).subscribe(hasAuthenticated => {
          if (hasAuthenticated) {
              //
          } else {
              this.snackBar.open("prijava nije bila uspješna",undefined, {
                  duration: 2000
              });
          }
      });
      }
    
    }); 

  }

  logout() {
    this.rest.logout();
  }
}
