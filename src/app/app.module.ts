import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AdoptComponent } from './page/adopt/adopt.component';
import { VolunteerComponent } from './page/volunteer/volunteer.component';
import { ContactComponent } from './page/contact/contact.component';
import { DonateComponent } from './page/donate/donate.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { LoginComponent } from './dialog/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddDogComponent } from './dialog/add-dog/add-dog.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, NativeDateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DeleteDogComponent } from './dialog/delete-dog/delete-dog.component';
import { ShowDogComponent } from './dialog/show-dog/show-dog.component';
import { AgePipe } from './pipes/agepipe';
import { ImageSort } from './pipes/imagesortpipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CropImageComponent } from './dialog/crop-image/crop-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { NgxEditorModule } from 'ngx-editor';
import { MessagesComponent } from './page/messages/messages.component';
import { MatTableModule } from '@angular/material/table';
import { AddVideoComponent } from './dialog/add-video/add-video.component';
import { VideoSort } from './pipes/videosortpipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { DogFilter } from './pipes/dogfilter';
import { AddStoryComponent } from './dialog/add-story/add-story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdoptComponent,
    VolunteerComponent,
    ContactComponent,
    DonateComponent,
    GalleryComponent,
    LoginComponent,
    AddDogComponent,
    DeleteDogComponent,
    ShowDogComponent,
    AgePipe,
    ImageSort,
    VideoSort,
    CropImageComponent,
    MessagesComponent,
    AddVideoComponent,
    DogFilter,
    AddStoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatMomentDateModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    ImageCropperModule,
    MatSelectModule,
    MatDividerModule,
    NgxEditorModule,
    MatTableModule,
    MatExpansionModule
  ],
  entryComponents: [
    LoginComponent,
    AddDogComponent,
    DeleteDogComponent,
    ShowDogComponent,
    CropImageComponent,
    AddVideoComponent,
    AddStoryComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
