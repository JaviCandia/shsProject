import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  API: string;

  constructor( private http: HttpClient ) {
    this.API = 'http://localhost:3000';
  }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.API}/countries`);
  }
}
