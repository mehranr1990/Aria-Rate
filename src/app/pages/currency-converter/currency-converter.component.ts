import { Component, OnInit } from '@angular/core';
import { initialRates } from '../../core/data/initialRates';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  addToDataase,
  getDatabase,
  initializeDatabase,
  updateCurrentAEDRate,
  updateDataBaseRates,
} from '../../core/db';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [KeyValuePipe, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent implements OnInit {
  aedRate: any;
  data: any;
  dbdata: any;
  constructor() {
  }
  async ngOnInit() {
    

      const key = localStorage.getItem('key');
      console.log(key);
      if(key){

        initializeDatabase();
        const fetchfromDb = await getDatabase(key);
        console.log(fetchfromDb);
      
      if (fetchfromDb == undefined) {
        this.data = initialRates;
        console.log(initialRates);
      } else if (fetchfromDb) {
        console.log(fetchfromDb);
        this.data = fetchfromDb;
      }
      }else{
        this.data = initialRates;
        console.log(initialRates);
      }

    // addToDataase(this.data,2)
  }

  settingShow: boolean = false;
  settingToggle() {
    this.settingShow = !this.settingShow;
  }

  async changeRate() {
    const key = localStorage.getItem('key');
    updateDataBaseRates(this.data, key);
  }
  updateDatabase() {
    const key = localStorage.getItem('key');
    console.log(this.data);
    updateDataBaseRates(this.data, key);
  }
}
