import { createSelector } from "@ngrx/store";
import { IAppStateInterface } from "../../models/interfaces/appstate.interface";

export const countryFeature = (state:IAppStateInterface) => state.countries

export const loadCountriesSelector = createSelector(
    countryFeature,
    (state) => state
)

export const isLoadingCountriesSelector = createSelector(
    countryFeature,
    (state) => state.isLoading
)

export const searchTerm = createSelector(
    countryFeature,
    (state) => state.searchTerm
)

export const countriesSelector = createSelector(
    countryFeature,
    (state) => 
    {   let all = state
         let filtered = state.data;
    if (state.searchTerm!=='') {
      const query = state.searchTerm.toLowerCase();
      filtered = filtered.filter((country) =>
        country.name.official.toLowerCase().includes(query)
      );
    }
    if (state.region) {
      filtered = filtered.filter(
        (country) => country.region === state.region
      );
    }
    return {
      ...all,
      data: filtered
    }
    } 

)

export const isErrorSelector = createSelector(
    countryFeature,
    (state) => state.error
)