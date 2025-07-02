import { props,createAction } from "@ngrx/store";
import { ICountryData } from "../../models/interfaces/restdata.interface";

export const LoadCountries = createAction('[Load] country data')
export const loadCountriesSuccess = createAction('[Get] Load countries Success',props<{countries:ICountryData[]}>())
export const loadCountriesFailure = createAction('[Get] Load countries Error',props<{error: string}>())