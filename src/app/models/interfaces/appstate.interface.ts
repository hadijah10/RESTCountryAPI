import { ICountriesData, ISelectedCountry } from "./restdata.interface";
import { IThemeInterface } from "./theme.interface";

export interface IAppStateInterface{
    isDark:IThemeInterface
    countries: ICountriesData,
    country: ISelectedCountry
}