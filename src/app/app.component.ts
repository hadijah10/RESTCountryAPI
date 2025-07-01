import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Store } from '@ngrx/store';
import { IAppStateInterface } from './models/interfaces/appstate.interface';
import { isDarkSelector } from './store/selectors/theme.selector';
import { Observable } from 'rxjs';
import { IThemeInterface } from './models/interfaces/theme.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restcountriesapi';
  isDark$:Observable<boolean>
  storeService = inject(Store)
  constructor(){
    this.isDark$ = this.storeService.select(isDarkSelector)
  }
}
