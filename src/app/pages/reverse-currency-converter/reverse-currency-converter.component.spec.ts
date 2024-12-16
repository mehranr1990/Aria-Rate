import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCurrencyConverterComponent } from './reverse-currency-converter.component';

describe('ReverseCurrencyConverterComponent', () => {
  let component: ReverseCurrencyConverterComponent;
  let fixture: ComponentFixture<ReverseCurrencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseCurrencyConverterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReverseCurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
