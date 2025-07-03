import { Component } from '@angular/core';
import { IThemeInterface } from '../../models/interfaces/theme.interface';
import { Store } from '@ngrx/store';
import { loadCountries } from '../../store/actions/loadCountries.action';
import { loadCountriesSelector } from '../../store/selectors/loadCountries.selector';
import { ICountriesData } from '../../models/interfaces/restdata.interface';
import { Observable } from 'rxjs';
import { IAppStateInterface } from '../../models/interfaces/appstate.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  data$:Observable<ICountriesData>;
  constructor(private store:Store<IAppStateInterface>){
    this.data$ = this.store.select(loadCountriesSelector)
    console.log('store ',this.store)
  }
  ngOnInit(){
    this.store.dispatch(loadCountries());
  }

}

