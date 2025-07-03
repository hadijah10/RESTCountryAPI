import { createAction, props } from "@ngrx/store";
import { ISelectCountryByNameInterface } from "../../models/interfaces/restdata.interface";

export const selectedCountry = createAction('[SelectCountry] Get country details',props<{id:string}>())
export const getSelectedCountrySuccess = createAction('[Get Selected Country By Name] Sucess',props<{country:ISelectCountryByNameInterface[]}>())
// export const getSelectedCountrySuccessByCode = createAction('[Get Selected Country By Name] Sucess',props<{}>())
export const getSelectedCountryFailed = createAction('[Get Selected Country Failure] Denied',props<{error:string}>())