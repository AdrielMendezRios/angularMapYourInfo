import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('https://ipapi.co/json/')
  }
}
