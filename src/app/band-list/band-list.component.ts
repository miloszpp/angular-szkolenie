import { Component, OnInit } from '@angular/core';
import { Band } from "../model";
import { BandService } from "../band.service";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
})
export class BandListComponent implements OnInit {
  band: Band = null;
  bands$: Observable<Band[]>;
  click$ = new Subject<any>();

  constructor(private bandsService: BandService) {}
  
  ngOnInit(): void {
    this.bands$ = Observable.merge(
      this.bandsService.getBands(), // inicjalne załadowanie danych
      this.click$.debounceTime(500).mergeMap(() => this.bandsService.getBands()) // kolejne strzały juz tylko po kliknieciu
    ).do(() => {
      this.band = null; // zawsze jak dostaniemy nową listę zespołów to resetujemy obecnie wybrany
    });
  }
}
