import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetRateCalculatorComponent } from './target-rate-calculator.component';

describe('TargetRateCalculatorComponent', () => {
  let component: TargetRateCalculatorComponent;
  let fixture: ComponentFixture<TargetRateCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetRateCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetRateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
