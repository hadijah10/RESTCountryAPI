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
  region: string;
  capital?: string[];          // capital can be missing or an empty array
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}

export interface ICountriesData{
isLoading: boolean,
data: ICountryData[],
error: string | null
}

export interface ISelectedCountry{
  selectedCountry: string
}