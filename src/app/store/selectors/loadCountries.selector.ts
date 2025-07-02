import { createSelector } from "@ngrx/store";
import { IAppStateInterface } from "../../models/interfaces/appstate.interface";

export const countryFeature = (state:IAppStateInterface) => state.countries

export const loadCuntriesSelector = createSelector(
    countryFeature,
    (state) => state
)

export const isLoadingCountriesSelector = createSelector(
    countryFeature,
    (state) => state.isLoading
)
export const countriesSelector = createSelector(
    countryFeature,
    (state) => state.data
)

export const isErrorSelector = createSelector(
    countryFeature,
    (state) => state.error
)