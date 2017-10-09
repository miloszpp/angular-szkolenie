import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandDetailsPhotoComponent } from './band-details-photo/band-details-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    BandDetailsComponent,
    BandListComponent,
    BandDetailsPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
