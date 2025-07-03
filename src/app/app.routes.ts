import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

export const routes: Routes = [
 {
    path:'',
    component: HomepageComponent
 },
 {
    path: '**',
    component: ErrorpageComponent
 }
];
