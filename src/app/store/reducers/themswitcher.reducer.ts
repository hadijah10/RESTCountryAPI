import { on,createReducer } from "@ngrx/store";
import { IThemeInterface } from "../../models/interfaces/theme.interface";
import { setTheme, toggleTheme } from "../actions/themeswitcher.action";

export const initialState:IThemeInterface = {
    isDark: JSON.parse(localStorage.getItem('isDark') || 'false')
}

export const themeReducer = createReducer(
initialState,
on(toggleTheme,(state) =>{
    const newTheme = !state.isDark;
    localStorage.setItem('isDark', JSON.stringify(newTheme))
   return  {...state,isDark:newTheme};
}
),
on(setTheme, (state, action) => {
    localStorage.setItem('isDark', JSON.stringify(action.isDark));
    return { ...state, isDark: action.isDark };
}),
)