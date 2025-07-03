import { Component,OnInit,Renderer2,inject } from '@angular/core';
import { IThemeInterface } from '../../models/interfaces/theme.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppStateInterface } from '../../models/interfaces/appstate.interface';
import { setTheme } from '../../store/actions/themeswitcher.action';
import { isDarkSelector } from '../../store/selectors/theme.selector';
import { toggleTheme } from '../../store/actions/themeswitcher.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

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
