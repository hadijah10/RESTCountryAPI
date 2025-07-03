import { ISelectedCountry } from "../../models/interfaces/restdata.interface"
import { IAppStateInterface } from "../../models/interfaces/appstate.interface"
import { createSelector } from "@ngrx/store"

export const countrydata = (state:IAppStateInterface) => state.country

export const idSelector = createSelector(
    countrydata,
    (state) => state.id
)

export const isLoading = createSelector(
    countrydata,
    (state) => state.data
)