import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryData, ISelectCountryByNameInterface } from '../models/interfaces/restdata.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<ICountryData[]>(`${environment.apiUrl}all?fields=name,population,flags,region,capital`)
  }

  getCountryDetailsWithName(countryname:string){
    return this.http.get<ISelectCountryByNameInterface[]>(`${environment.apiUrl}name/${countryname}`)
  }

  getCountryDetailsWithCode(countrycode:string){
    return this.http.get<ISelectCountryByNameInterface[]>(`${environment.apiUrl}alpha/${countrycode}`)
  }


}
