import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingOverviewComponent } from './trading-overview.component';

describe('TradingOverviewComponent', () => {
  let component: TradingOverviewComponent;
  let fixture: ComponentFixture<TradingOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingOverviewComponent]
    });
    fixture = TestBed.createComponent(TradingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
