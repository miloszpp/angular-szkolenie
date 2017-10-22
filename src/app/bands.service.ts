import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Band } from "./model";

import 'rxjs/add/operator/toPromise';

/**
 * UWAGA! Jest tutaj mała rónica w stosunku do kodu na zajęciach. Zamiast service'u
 * Http wstrzukujemy nowy service HttpClient, który jest duzo latwiejszy w uzyciu.
 * Podczas wywolania get podajemy jako parameter typ odpowiedzi ktora spodziewamy
 * sie otrzymac.
 */
@Injectable()
export class BandsService {

  url = "http://restbands.azurewebsites.net/api/Band"

  constructor(private http: HttpClient) { }

  getBands(): Promise<Band[]> {
    return this.http.get<Band[]>(this.url)
      .toPromise()
      .catch(error => Promise.reject("Failed to fetch band list"));
  }

  createBand(band: Band): Promise<any> {
    return this.http.post(this.url, band).toPromise();
  }

}
