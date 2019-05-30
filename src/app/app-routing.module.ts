import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptComponent } from './adopt/adopt.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DogsResolverService } from './resolvers/dogs-resolver.service';

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
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
