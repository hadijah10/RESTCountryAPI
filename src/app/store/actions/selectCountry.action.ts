import { createAction, props } from "@ngrx/store";

export const selectedCountry = createAction('[SelectCountry] Get country details',props<{countryname:string}>)