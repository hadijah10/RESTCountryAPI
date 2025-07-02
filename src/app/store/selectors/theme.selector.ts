import { createSelector } from "@ngrx/store"
import { IAppStateInterface } from "../../models/interfaces/appstate.interface"

export const selectFeature = (state: IAppStateInterface) => state.isDark

export const isDarkSelector = createSelector(
    selectFeature,
    (state) => state
)