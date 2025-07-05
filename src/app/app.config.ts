import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore,provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { themeReducer } from './store/reducers/themswitcher.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { LoadCountriesReducer } from './store/reducers/loadCountries.reducer';
import { LoadCountriesEffect } from './store/effects/loadCountries.effect';
import { SelectedCountryReducer } from './store/reducers/selectCountry.reducer';
import { SelectCountryEffect } from './store/effects/selectCountry.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({isDark: themeReducer,countries: LoadCountriesReducer,country: SelectedCountryReducer}),
    provideEffects([LoadCountriesEffect,SelectCountryEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode()})]
};
