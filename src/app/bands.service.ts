import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Band } from "./model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BandsService {

  url = "http://restbands.azurewebsites.net/api/Band"

  constructor(private http: Http) { }

  getBands(): Promise<Band[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Band[])
      .catch(error => Promise.reject("Failed to fetch band list"));
  }

  createBand(band: Band): Promise<any> {
    return this.http.post(this.url, band).toPromise();
  }

}
