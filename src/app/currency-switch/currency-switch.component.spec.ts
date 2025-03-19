import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySwitchComponent } from './currency-switch.component';

describe('CurrencySwitchComponent', () => {
  let component: CurrencySwitchComponent;
  let fixture: ComponentFixture<CurrencySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CurrencySwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
