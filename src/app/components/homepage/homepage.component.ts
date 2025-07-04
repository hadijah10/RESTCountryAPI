import { Component,inject } from '@angular/core';
import { IThemeInterface } from '../../models/interfaces/theme.interface';
import { Store } from '@ngrx/store';
import { loadCountries } from '../../store/actions/loadCountries.action';
import { loadCountriesSelector } from '../../store/selectors/loadCountries.selector';
import { ICountriesData } from '../../models/interfaces/restdata.interface';
import { Observable } from 'rxjs';
import { IAppStateInterface } from '../../models/interfaces/appstate.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  route = inject(Router)
  data$:Observable<ICountriesData>;
  constructor(private store:Store<IAppStateInterface>){
    this.store.dispatch(loadCountries())
    this.data$ = this.store.select(loadCountriesSelector)
    console.log('store ',this.store)
  }
  ngOnInit(){

  }

  handleCardClick(name: string){
   
    
  }

}

