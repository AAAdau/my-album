import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component'
import { AlbumsService } from './albums.service';
import {AlbumsDetailComponent} from './albums-detail/albums-detail.component'
import { HttpClientModule } from '@angular/common/http';
import { AlbumsPhotosComponent } from './album-photos/album-photos.component';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forRoot([
        { path: '', component: AlbumsComponent },
        {path: 'album/:id', component: AlbumsDetailComponent},
        {path: 'album/:id/photos', component: AlbumsPhotosComponent},
      ])
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      AlbumsComponent,
      AlbumsDetailComponent,
      AlbumsPhotosComponent
    ],
    providers: [AlbumsService],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  