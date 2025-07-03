import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectedCountry } from '../../store/actions/selectCountry.action';
import { Observable } from 'rxjs';
import { ISelectedCountry } from '../../models/interfaces/restdata.interface';
import { countrydata, idSelector } from '../../store/selectors/selectCountry.selector';

@Component({
  selector: 'app-countrydetails',
  imports: [RouterLink],
  templateUrl: './countrydetails.component.html',
  styleUrl: './countrydetails.component.scss'
})
export class CountrydetailsComponent implements OnInit{
activatedRoute = inject(ActivatedRoute)
countrydata$: Observable<ISelectedCountry>
storeservice = inject(Store)
selectedCountryData: ISelectedCountry 
= {
  id:'',
  isLoading:false,
  data:[],
  error:null
}
id:string=''
  constructor(){
    this.id= this.activatedRoute.snapshot.params['id'];
    this.countrydata$ = this.storeservice.select(countrydata)
    // this.countrydata$.subscribe({
    //   next: (data) => this.selectedCountryData = data,
    //   error:(error) => {}
    // })
    console.log(this.selectedCountryData)
 
  }

  

  ngOnInit(){
    this.storeservice.dispatch(selectedCountry({id:this.id}))
  }

}
