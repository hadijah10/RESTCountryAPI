import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryData } from '../models/interfaces/restdata.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<ICountryData>(environment.apiUrl)
  }


}
