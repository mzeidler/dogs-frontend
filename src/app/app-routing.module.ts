import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AdoptComponent } from './page/adopt/adopt.component';
import { VolunteerComponent } from './page/volunteer/volunteer.component';
import { DonateComponent } from './page/donate/donate.component';
import { ContactComponent } from './page/contact/contact.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { DogsResolverService } from './service/dogs-resolver/dogs-resolver.service';
import { MessagesComponent } from './page/messages/messages.component';
import { MessagesResolverService } from './service/messages-resolver/messages-resolver.service';
import { ShelterStoryResolverService } from './service/shelter-story-resolver/shelter-story-resolver.service';
import { AdoptedComponent } from './page/adopted/adopted.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  }, 
  { path: 'home', component: HomeComponent },
  { path: 'adopted', component: AdoptedComponent },
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
  { 
    path: 'gallery', 
    component: GalleryComponent,
    resolve: {
      shelterStories: ShelterStoryResolverService
    }
  },
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
