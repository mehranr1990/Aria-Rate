import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse-currency-converter',
  standalone: true,
  imports: [],
  templateUrl: './reverse-currency-converter.component.html',
  styleUrl: './reverse-currency-converter.component.scss'
})
export class ReverseCurrencyConverterComponent {
  
settingShow :boolean =false
settingToggle(){
  this.settingShow = !this.settingShow
}

}
