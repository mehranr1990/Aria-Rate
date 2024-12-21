import { Component, OnInit } from '@angular/core';
import { getDatabase, initializeDatabase } from '../../core/db';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-target-rate-calculator',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './target-rate-calculator.component.html',
  styleUrl: './target-rate-calculator.component.scss',
})
export class TargetRateCalculatorComponent implements OnInit {
  data: any;
  async ngOnInit() {
    initializeDatabase();
    const key = localStorage.getItem('key');
    const fetchfromDb = await getDatabase(key);
    console.log(fetchfromDb);
    this.data = fetchfromDb;
  }
}
