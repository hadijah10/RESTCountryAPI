import { Component, inject, OnInit,Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Store } from '@ngrx/store';
import { IAppStateInterface } from './models/interfaces/appstate.interface';
import { isDarkSelector, selectFeature } from './store/selectors/theme.selector';
import { Observable } from 'rxjs';
import { IThemeInterface } from './models/interfaces/theme.interface';
import { CommonModule } from '@angular/common';
import { setTheme, toggleTheme } from './store/actions/themeswitcher.action';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'restcountriesapi';
  //  storeService = inject(Store<IAppStateInterface>)
  isDark$:Observable<IThemeInterface> 

  constructor(private storeService: Store<IAppStateInterface> ,private renderer: Renderer2){
        // In app.component.ts or initialization logic
  const saved = localStorage.getItem('isDark');
   if (saved == null) {
    localStorage.setItem('isDark',JSON.stringify(false))
      this.storeService.dispatch(setTheme({ isDark: false}));
      // alert(localStorage.getItem('isDark'))
    }
    this.isDark$ = this.storeService.select(isDarkSelector)
    
      // this.storeService.dispatch(toggleTheme())
  }

  handleClick(){
      this.storeService.dispatch(toggleTheme())
    }

  ngOnInit(){

    this.storeService.select(isDarkSelector).subscribe({
      next: (isDark) => {
        const className= 'dark-theme';
        if(isDark.isDark == true){
          this.renderer.addClass(document.body, className)
        }else{
          this.renderer.removeClass(document.body, className)
        }
    
      }
    })
   

  }
}
