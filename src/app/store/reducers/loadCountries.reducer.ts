import { ICountriesData, ICountryData } from "../../models/interfaces/restdata.interface"
import { on, createReducer } from "@ngrx/store"
import { loadCountries, loadCountriesSuccess, loadCountriesFailure } from "../actions/loadCountries.action"

export const initialState: ICountriesData = {
    isLoading: false,
    data: [],
    error: null
}

export const LoadCountriesReducer = createReducer(
    initialState,
    on(loadCountries, (state) => ({ ...state, isLoading: true })),
    on(loadCountriesSuccess, (state, actions) => ({ ...state, isLoading: false, data: actions.countries })),
    on(loadCountriesFailure, (state, actions) => ({ ...state, isLoading: false, error: actions.error }))
)