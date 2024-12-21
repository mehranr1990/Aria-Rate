import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialRates } from '../../core/data/initialRates';
import { DecimalPipe } from '@angular/common';
import {
  getDatabase,
  initializeDatabase,
  updateDataBaseRates,
} from '../../core/db';
@Component({
  selector: 'app-reverse-currency-converter',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './reverse-currency-converter.component.html',
  styleUrl: './reverse-currency-converter.component.scss',
})
export class ReverseCurrencyConverterComponent implements OnInit {
  data: any;
  dbdata: any;
  constructor() {
  }
  async ngOnInit() {
    initializeDatabase();
    const key = localStorage.getItem('key');
    const fetchfromDb = await getDatabase(key);
    console.log(fetchfromDb);
    this.data = fetchfromDb;
  }

  settingShow: boolean = false;
  settingToggle() {
    this.settingShow = !this.settingShow;
  }

  updateDatabase() {
    console.log(this.data);
    const key = localStorage.getItem('key');
    updateDataBaseRates(this.data, key);
  }
}
