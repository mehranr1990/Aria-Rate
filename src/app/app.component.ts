import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CurrencyConverterComponent } from "./pages/currency-converter/currency-converter.component";
import { ReverseCurrencyConverterComponent } from "./pages/reverse-currency-converter/reverse-currency-converter.component";
import { VersionControlComponent } from "./components/version-control/version-control.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  , CurrencyConverterComponent, ReverseCurrencyConverterComponent, VersionControlComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  versionShow : boolean = false
  active:number =0
  versionToggle(){
    this.versionShow = !this.versionShow
  }
  title = 'Aria-Rate-Ai';
  constructor(private router: Router){}
  navigateToReverse(){
    this.active =2 
    this.router.navigate(['/reverce']);
  }
  navigateToCurrency(){
    this.active =1 
    this.router.navigate(['/']);
  }
  navigateToTargetRate(){
    this.active =3 
    this.router.navigate(['/target-rate']);
  }
  navigateToTrade(){
    this.active =4 
    this.router.navigate(['/trade']);
  }
  
}
