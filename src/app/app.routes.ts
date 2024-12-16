import { Routes } from '@angular/router';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';
import { ReverseCurrencyConverterComponent } from './pages/reverse-currency-converter/reverse-currency-converter.component';
import { TradeAnalyzerComponent } from './pages/trade-analyzer/trade-analyzer.component';
import { TargetRateCalculatorComponent } from './pages/target-rate-calculator/target-rate-calculator.component';

export const routes: Routes = [
  { path: '', component: CurrencyConverterComponent },
  { path: 'reverce', component: ReverseCurrencyConverterComponent },
  { path: 'target-rate', component: TargetRateCalculatorComponent },
  { path: 'trade', component: TradeAnalyzerComponent },
];
