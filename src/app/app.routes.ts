import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';

export const routes: Routes = [
 {
    path:'',
    component: HomepageComponent
 },
 {
    path:':id',
    component: CountrydetailsComponent
 },
 {
    path: '**',
    component: ErrorpageComponent
 }
];
