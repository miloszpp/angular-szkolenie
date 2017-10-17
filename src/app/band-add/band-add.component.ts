import { Component, OnInit } from '@angular/core';
import { Band } from "../model";
import { BandsService } from "../bands.service";

@Component({
  selector: 'app-band-add',
  templateUrl: './band-add.component.html',
  styles: []
})
export class BandAddComponent {

  model: Band = {
    name: "",
    bio: "",
    genres: [],
    members: [],
    links: {
      photoUrl: "",
      wikipediaUrl: ""
    }
  };
  
  constructor(private bandService: BandsService) { }

  onSubmit() {
    this.bandService.createBand(this.model)
      .catch(error => alert(`Could not add band: ${error}`));
  }

}
