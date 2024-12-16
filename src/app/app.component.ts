import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CurrencyConverterComponent } from "./pages/currency-converter/currency-converter.component";
import { ReverseCurrencyConverterComponent } from "./pages/reverse-currency-converter/reverse-currency-converter.component";
import { VersionControlComponent } from "./components/version-control/version-control.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  , CurrencyConverterComponent, ReverseCurrencyConverterComponent, VersionControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  versionShow : boolean = false
  versionToggle(){
    this.versionShow = !this.versionShow
  }
  title = 'Aria-Rate-Ai';
  constructor(private router: Router){}
  navigateToReverse(){
    this.router.navigate(['/reverce']);
  }
  navigateToCurrency(){
    this.router.navigate(['/']);
  }
  navigateToTargetRate(){
    this.router.navigate(['/target-rate']);
  }
  navigateToTrade(){
    this.router.navigate(['/trade']);
  }
  
}
