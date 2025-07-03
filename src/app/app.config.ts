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

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({isDark: themeReducer,countries: LoadCountriesReducer, }),
    provideEffects([LoadCountriesEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode()})]
};
