import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';

export const routes: Routes = [
 {
    path:'',
    loadComponent: () => import('./components/homepage/homepage.component').then(m => m.HomepageComponent)
 },
 {
    path:':id',
    loadComponent: () => import('./components/countrydetails/countrydetails.component').then(m => m.CountrydetailsComponent)
 },
 {
    path: '**',
    component: ErrorpageComponent
 }
];
