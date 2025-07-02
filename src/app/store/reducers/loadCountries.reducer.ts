import { ICountriesData, ICountryData } from "../../models/interfaces/restdata.interface"
import { on,createReducer } from "@ngrx/store"
import { LoadCountries,loadCountriesSuccess,loadCountriesFailure } from "../actions/loadCountries.action"

export const initialState:ICountriesData ={
    isLoading:false,
    data: [],
    error: null 
}

// {flags:{
//         png:"https://flagcdn.com/w320/tg.png",
//         svg:"https://flagcdn.com/tg.svg",
//         alt:"The flag of Togo is composed of five equal horizontal bands of green alternating with yellow. A red square bearing a five-pointed white star is superimposed in the canton."
//     },
//     name:{common:"Togo",
//         official:"Togolese Republic",
//         nativeName:{
//                 fra:{
//                     official:"République togolaise",
//                 common:"Togo"
//                 }
//             }
//         },
//         capital:["Lomé"],
//         region:"Africa",
//         population:8278737
//     }



export const LoadCountriesReducer = createReducer(
initialState,
on(LoadCountries,(state) => ({...state,isLoading: true})),
on(loadCountriesSuccess,(state,actions) => ({...state,isLoading:false,data: actions.countries})),
on(loadCountriesFailure,(state,actions) => ({...state,isLoading:false,error:actions.error}))
)