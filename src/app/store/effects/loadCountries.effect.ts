import { inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";
import { of,catchError, switchMap,map } from "rxjs";
import { loadCountries, loadCountriesFailure, loadCountriesSuccess } from "../actions/loadCountries.action";

Injectable()
export class loadCountriesService{
actions$= inject(Actions)
constructor(private apiservice: ApiService){}

loadCountries(){
this.actions$.pipe(
    ofType(loadCountries),
    switchMap(() => {
        return this.apiservice.getCountries().pipe(
            map(countries => loadCountriesSuccess({countries})),
            catchError(error => of(loadCountriesFailure({error:error.message})))
        )
    })
)
}

}