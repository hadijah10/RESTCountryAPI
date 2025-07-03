import {props, createAction } from "@ngrx/store";

export const toggleTheme = createAction('[Toggle the theme]')
export const setTheme = createAction('[Theme] Set theme', props<{isDark:boolean }>())