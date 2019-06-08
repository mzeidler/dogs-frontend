import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AdoptComponent } from './page/adopt/adopt.component';
import { VolunteerComponent } from './page/volunteer/volunteer.component';
import { DonateComponent } from './page/donate/donate.component';
import { ContactComponent } from './page/contact/contact.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { DogsResolverService } from './resolvers/dogs-resolver.service';
import { MessagesComponent } from './page/messages/messages.component';
import { MessagesResolverService } from './resolvers/messages-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  }, 
  { path: 'home', component: HomeComponent },
  { 
    path: 'adopt', 
    component: AdoptComponent,
    resolve: {
      dogs: DogsResolverService
    }
  },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { 
    path: 'messages', 
    component: MessagesComponent,
    resolve: {
      messages: MessagesResolverService
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
