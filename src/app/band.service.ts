import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Band } from "./model";

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import { Subscribable } from 'rxjs/Observable';

@Injectable()
export class BandService {
  url = "http://restbands.azurewebsites.net/api/Band"

  constructor(private http: HttpClient) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.url);
  }

  createBand(band: Band): Observable<any> {
    return this.http.post(this.url, band);
  }
}
