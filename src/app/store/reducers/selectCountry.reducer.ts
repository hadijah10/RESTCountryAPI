import { ISelectedCountry } from "../../models/interfaces/restdata.interface"
import { getSelectedCountryFailed,getSelectedCountrySuccessByName,selectedCountry } from "../actions/selectCountry.action"
import { on,createReducer } from "@ngrx/store"

export const initialState: ISelectedCountry={
    isLoading:false,
    data:[],
    error: null
}

export const SelectedCountryReducer = createReducer(
    initialState,
    on(selectedCountry,(state) => ({...state,isLoading:false})),
    on(getSelectedCountrySuccessByName,(state,action) => ({...state, isLoading: false, data: action.country})),
    on(getSelectedCountryFailed,(state,action) => ({...state,isLoading: false, error:action.error}))
)