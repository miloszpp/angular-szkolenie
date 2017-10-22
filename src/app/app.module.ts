import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandDetailsPhotoComponent } from './band-details-photo/band-details-photo.component';
import { BandsService } from "./bands.service";
import { ColorService } from "./color.service";
import { RouterModule, Routes } from '@angular/router';
import { BandAddComponent } from './band-add/band-add.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'band-list', component: BandListComponent },
  { path: 'band-add', component: BandAddComponent },
  { path: '', redirectTo: '/band-list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    BandDetailsComponent,
    BandListComponent,
    BandDetailsPhotoComponent,
    BandAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BandsService,
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
