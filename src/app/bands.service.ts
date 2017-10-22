import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Band } from "./model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BandsService {

  url = "http://restbands.azurewebsites.net/api/Band"

  constructor(private http: HttpClient) { }

  getBands(): Promise<Band[]> {
    return this.http.get<Band[]>(this.url)
      .toPromise()
      .catch(error => Promise.reject("Failed to fetch band list"));
  }

}
