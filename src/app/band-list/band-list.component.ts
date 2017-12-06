import { Component, OnInit } from '@angular/core';
import { Band } from "../model";
import { BandService } from "../band.service";

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styles: []
})
export class BandListComponent implements OnInit {

  band: Band = null;
  bands: Band[];

  constructor(private bandsService: BandService) {
  }
  
  ngOnInit(): void {
    this.bandsService.getBands().subscribe(
      bands => { this.bands = bands; },
      error => { alert("Błąd podczas pobierania listy zespołów"); }
    );
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

  trackBand(idx: number, band: Band) {
    return band.name;
  }

}
