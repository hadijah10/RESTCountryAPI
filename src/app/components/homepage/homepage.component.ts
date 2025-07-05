import { Component,inject, signal } from '@angular/core';
import { IThemeInterface } from '../../models/interfaces/theme.interface';
import { Store } from '@ngrx/store';
import { loadCountries } from '../../store/actions/loadCountries.action';
import { countriesSelector, loadCountriesSelector } from '../../store/selectors/loadCountries.selector';
import { ICountryData,ICountriesData} from  '../../models/interfaces/restdata.interface';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { IAppStateInterface } from '../../models/interfaces/appstate.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { loadCountriesFilter } from '../../store/actions/loadCountries.action';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  route = inject(Router)
  data$:Observable<ICountriesData>
  searchTerminp =new BehaviorSubject<string>('')
    regions: string[] = ['','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  searchsig = signal<string>('')
  region:string = ''
  regionsig = signal<string>('')

  constructor(private store:Store<IAppStateInterface>){
    this.data$ = this.store.select(countriesSelector)
    this.searchTerminp.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe({
      next:((input) => {
        this.searchsig.set(input)
        this.store.dispatch(loadCountriesFilter({searchTerm: this.searchsig(), region:this.regionsig()})) 
    })

})
 
}
  ngOnInit(){
     this.store.dispatch(loadCountries())
  }
  handleSearch(event: Event){
    const input = event.target as HTMLInputElement
    this.searchTerminp.next(input.value)
}

handleRegionFilter(){
  this.regionsig.set(this.region)
  this.store.dispatch(loadCountriesFilter({searchTerm:this.searchsig(),region:this.region}))
}

}

