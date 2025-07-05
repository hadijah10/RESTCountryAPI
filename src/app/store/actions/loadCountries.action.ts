import { props,createAction } from "@ngrx/store";
import { ICountryData } from "../../models/interfaces/restdata.interface";

export const loadCountries = createAction('[Load] country data')
export const loadCountriesFilter =  createAction('[Load] country filter',props<{searchTerm:string,region:string}>())
export const loadCountriesSuccess = createAction('[Get] Load countries Success',props<{countries:ICountryData[]}>())
export const loadCountriesFailure = createAction('[Get] Load countries Error',props<{error: string}>())