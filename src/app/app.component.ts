import { Component } from '@angular/core';
import { TranslationService } from './translations/translation.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dogs-frontend';

  constructor(private t: TranslationService, public dialog: MatDialog) { }

  login() {

    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px', data: { 
        username: undefined,
        password: undefined
      }
    });

    dialogRef.afterClosed().subscribe(result => {    
      if (result) {
        console.log("username: " + result.username);
      }
    
    }); 

  }
}
