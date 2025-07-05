import { Component,inject } from '@angular/core';
import { IThemeInterface } from '../../models/interfaces/theme.interface';
import { Store } from '@ngrx/store';
import { loadCountries } from '../../store/actions/loadCountries.action';
import { loadCountriesSelector } from '../../store/selectors/loadCountries.selector';
import { ICountriesData } from '../../models/interfaces/restdata.interface';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { IAppStateInterface } from '../../models/interfaces/appstate.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  route = inject(Router)
  data$:Observable<ICountriesData>;
  searchTerm =new BehaviorSubject<string>('')
  filterRegion: string=''

  constructor(private store:Store<IAppStateInterface>){
    this.data$ = this.store.select(loadCountriesSelector)
    this.searchTerm.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe({
      next:(data => {
        this.store.dispatch(loadCountriesFilter({searchTerm:this.searchTerm}))
      })
    })

  }
  ngOnInit(){
     this.store.dispatch(loadCountries())
  }
  handleSearch(event: Event){
    const input = event.target as HTMLInputElement
    this.searchTerm.next(input.value)
}


}

