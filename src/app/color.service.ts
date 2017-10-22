import { Injectable } from '@angular/core';
import { Band } from "./model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ColorService {

  url = "http://restbands.azurewebsites.net/api/Color"

  constructor(private http: HttpClient) { }

  getColors(): Promise<string[]> {
    return this.http.get<string[]>(this.url)
      .toPromise()
      .catch(error => Promise.reject("Failed to fetch band list"));
  }

}
