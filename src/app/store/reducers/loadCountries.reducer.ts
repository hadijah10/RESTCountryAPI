import { ICountriesData, ICountryData } from "../../models/interfaces/restdata.interface"
import { on, createReducer } from "@ngrx/store"
import { loadCountries, loadCountriesSuccess, loadCountriesFailure, loadCountriesFilter } from "../actions/loadCountries.action"
import { searchTerm } from "../selectors/loadCountries.selector"

export const initialState: ICountriesData = {
    isLoading: false,
    searchTerm: '',
    region:'',
    data: [],
    error: null
}

export const LoadCountriesReducer = createReducer(
    initialState,
    on(loadCountries, (state) => ({ ...state, isLoading: true })),
    on(loadCountriesFilter,(state,actions) => ({...state,searchTerm:actions.searchTerm,region:actions.region})),
    on(loadCountriesSuccess, (state, actions)  => ({ ...state, isLoading: false, data: actions.countries })),
    on(loadCountriesFailure, (state, actions) => ({ ...state, isLoading: false, error: actions.error }))
)