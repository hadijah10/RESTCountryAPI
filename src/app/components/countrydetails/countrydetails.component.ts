import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-countrydetails',
  imports: [RouterLink],
  templateUrl: './countrydetails.component.html',
  styleUrl: './countrydetails.component.scss'
})
export class CountrydetailsComponent {
activatedRoute = inject(ActivatedRoute)
  constructor(){}
  
}
