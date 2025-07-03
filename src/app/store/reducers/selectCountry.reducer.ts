import { ISelectedCountry } from "../../models/interfaces/restdata.interface"
import { selectedCountry } from "../actions/selectCountry.action"
import { on,createReducer } from "@ngrx/store"

export const initialState: ISelectedCountry={
    selectedCountry:''
}

export const SelectedCountryReducer = createReducer(
    initialState,
    on(selectedCountry,(state,action) => ({...state,selectedCountry:action.countryname}))
)