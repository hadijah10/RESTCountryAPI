import { Injectable,inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getSelectedCountrySuccess, selectedCountry } from "../actions/selectCountry.action";
import { catchError, switchMap,map,of } from "rxjs";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { loadCountries, loadCountriesFailure } from "../actions/loadCountries.action";


@Injectable()
export class SelectCountryEffect{
    action$ =inject(Actions)
    apiservice = inject(ApiService)
    activatedRoute = inject(ActivatedRoute)
    countryId: string =''
    constructor(){
        // this.activatedRoute.params.subscribe(params =>
        //     this.countryId = params['id']
        //  )
    }
    loadDetails$ = createEffect(() => 
    this.action$.pipe(
        ofType(selectedCountry),
        switchMap(({id}) => {
            if(id.length ===3 && id == this.countryId.toUpperCase()){
                return this.apiservice.getCountryDetailsWithName(this.countryId).pipe(
                map( country => getSelectedCountrySuccess({country})),
                catchError(error => of(loadCountriesFailure({error: error.message})))
            
            )
            }else{
                 return this.apiservice.getCountryDetailsWithCode(this.countryId).pipe(
                map( country => getSelectedCountrySuccess({country})),
                catchError(error => of(loadCountriesFailure({error: error.message})))
                 )
            }

        })
    ))
}