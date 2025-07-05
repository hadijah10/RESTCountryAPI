export interface ICountryData {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [lang: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  cca3:string,
  region: string;
  capital?: string[];          // capital can be missing or an empty array
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}

export interface ICountriesData{
 searchTerm: string,
  region: string,
isLoading: boolean,
data: ICountryData[],
error: string | null
}

export interface ISelectedCountry{
  id:string,
  isLoading: boolean,
  data: ISelectCountryInterface[],
  error: string | null
}


export interface ISelectCountryInterface{ 
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [code: string]: {
      symbol: string;
      name: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [code: string]: string;
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  cca3: string;
  translations: {
    [lang: string]: {
      official: string;
      common: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode: {
    format: string;
    regex: string;
  };


}


