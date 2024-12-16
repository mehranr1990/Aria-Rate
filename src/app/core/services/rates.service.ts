import { Injectable, OnInit } from '@angular/core';
import { getCurrentAEDRate, getRates, initializeDatabase, toggleCurrency, toggleDirectCityRate, updateCurrencyRate, updateCurrentAEDRate } from '../db';

@Injectable({
  providedIn: 'root'
})
export class RatesService implements OnInit{

  constructor() { }
  ngOnInit(){
    this.loadRates()  
  }
  async loadRates(){
    try {
      await initializeDatabase();
      const [loadedRates, savedAEDRate] = await Promise.all([
        getRates(),
        getCurrentAEDRate()
      ]);
      // setRates(loadedRates);
      // setCurrentAEDRate(savedAEDRate.toString());
    } catch (error) {
      console.error('Error loading rates:', error);
    }
  }
  async handleUpdateAEDRate  (newRate: number) {
    try {
      await updateCurrentAEDRate(newRate);
      // setCurrentAEDRate(newRate.toString());
      await this.loadRates();
    } catch (error) {
      console.error('Error updating AED rate:', error);
    }
  };
  async handleUpdateCurrencyRate  (
    code: string,
    city: string,
    type: 'to' | 'from',
    newRate: number
  ) {
    try {
      await updateCurrencyRate(code, city, type, newRate);
      await this.loadRates();
    } catch (error) {
      console.error('Error updating currency rate:', error);
    }
  };
  async handleToggleCurrency  (code: string)  {
    try {
      await toggleCurrency(code);
      await this.loadRates();
    } catch (error) {
      console.error('Error toggling currency:', error);
    }
  };

  async handleToggleCityRate  (code: string, city: string) {
    try {
      await toggleDirectCityRate(code, city);
      await this.loadRates();
    } catch (error) {
      console.error('Error toggling city rate:', error);
    }
  };

  
}
