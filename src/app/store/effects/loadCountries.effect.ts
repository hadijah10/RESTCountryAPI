import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";
import { of,catchError, switchMap,map } from "rxjs";
import { loadCountries, loadCountriesFailure, loadCountriesSuccess } from "../actions/loadCountries.action";

@Injectable()
export class LoadCountriesEffect{
actions$= inject(Actions)
constructor(private apiservice: ApiService){}

loadCountries$ = createEffect(() => 
    this.actions$.pipe(
    ofType(loadCountries),
    switchMap(() => {
        return this.apiservice.getCountries().pipe(
            map(countries => loadCountriesSuccess({countries})),
            catchError(error => of(loadCountriesFailure({error:error.message})))
        )
    })))

}