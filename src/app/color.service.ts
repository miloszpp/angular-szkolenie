import { Injectable } from '@angular/core';
import { Band } from "./model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColorService {

  url = "http://restbands.azurewebsites.net/api/Color"

  constructor(private http: HttpClient) { }

  getColors(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }

}
