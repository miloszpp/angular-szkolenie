import { Component, OnInit } from '@angular/core';
import { Band } from "../model";
import { BandsService } from "../bands.service";

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styles: []
})
export class BandListComponent implements OnInit {

  band: Band;
  bands: Band[];

  constructor(private bandsService: BandsService) {
  }
  
  ngOnInit(): void {
    this.bandsService.getBands().then(bands => {
      this.bands = bands;
      this.band = bands[0];
    })
    .catch(error => alert(error));
  }
  
  shiftBand(direction) {
    let currentIdx = this.bands.indexOf(this.band);
    if (direction === "previous" && currentIdx > 0) {
      this.band = this.bands[currentIdx - 1];
    }
    if (direction === "next" && currentIdx < this.bands.length - 1) {
      this.band = this.bands[currentIdx + 1];
    }
  }

}
