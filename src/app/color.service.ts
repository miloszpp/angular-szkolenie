import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Band } from "./model";

@Injectable()
export class ColorService {

  url = "http://restbands.azurewebsites.net/api/Color"

  constructor(private http: Http) { }

  getColors(): Promise<string[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as string[])
      .catch(error => Promise.reject("Failed to fetch band list"));
  }

}
