import { Component, OnInit } from '@angular/core';
import { initialRates } from '../../core/data/initialRates';
import { CommonModule, KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [KeyValuePipe,CommonModule ],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent implements OnInit{
data:any
  ngOnInit(): void {
  this.data = initialRates
  console.log(this.data);
  
}
  
settingShow :boolean =false
settingToggle(){
  this.settingShow = !this.settingShow
}
}
