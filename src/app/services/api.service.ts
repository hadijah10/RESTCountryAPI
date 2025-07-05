import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryData, ISelectCountryInterface } from '../models/interfaces/restdata.interface';
import { environment } from '../../environments/environment.development';
import { catchError,retry}  from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private errorservice: ErrorService){}

  getCountries(){
    return this.http.get<ICountryData[]>(`${environment.apiUrl}all?fields=name,population,flags,region,capital,cca3`)
    .pipe(
      retry(2),
      catchError((error) => this.errorservice.handleError(error)))
  }


  getCountryDetailsWithCode(countrycode:string){
    return this.http.get<ISelectCountryInterface[]>(`${environment.apiUrl}alpha/${countrycode}`).pipe(
      retry(2 ),
      catchError((error) => this.errorservice.handleError(error)))

  }


}
