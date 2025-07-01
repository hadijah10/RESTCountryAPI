import { on,createReducer } from "@ngrx/store";
import { IThemeInterface } from "../../models/interfaces/theme.interface";
import { toggleTheme } from "../actions/themeswitcher.action";

export const initialState:IThemeInterface = {
    isDark: false
}

export const themeReducer = createReducer(
initialState,
on(toggleTheme,(state) =>( {...state,isDark:!state.isDark}))
)