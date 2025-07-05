import { Injectable,inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getSelectedCountrySuccess, selectedCountry } from "../actions/selectCountry.action";
import { catchError, tap,switchMap,map,of } from "rxjs";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { loadCountries, loadCountriesFailure } from "../actions/loadCountries.action";


@Injectable()
export class SelectCountryEffect{
    action$ =inject(Actions)
    apiservice = inject(ApiService)
    activatedRoute = inject(ActivatedRoute)
   
    constructor(){}
    loadDetails$ = createEffect(() => 
    this.action$.pipe(
        ofType(selectedCountry),
        switchMap((action) => {
            // alert(`${action.id}, ${typeof(action.id)}`)
                  return this.apiservice.getCountryDetailsWithCode(action.id).pipe(
                    tap((data) => console.log(data)),
                map( country => getSelectedCountrySuccess({country})),
                catchError(error => of(loadCountriesFailure({error: error.message})))
                 )
                }
        )
    ))
}