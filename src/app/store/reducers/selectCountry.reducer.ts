import { ISelectedCountry } from "../../models/interfaces/restdata.interface"
import { getSelectedCountryFailed,getSelectedCountrySuccess,selectedCountry } from "../actions/selectCountry.action"
import { on,createReducer } from "@ngrx/store"

export const initialState: ISelectedCountry={
    id:'',
    isLoading:false,
    data:[],
    error: null
}

export const SelectedCountryReducer = createReducer(
    initialState,
    on(selectedCountry,(state,action) => ({...state,isLoading:false,id:action.id})),
    on(getSelectedCountrySuccess,(state,action) => ({...state, isLoading: false, data: action.country})),
    on(getSelectedCountryFailed,(state,action) => ({...state,isLoading: false, error:action.error}))
)