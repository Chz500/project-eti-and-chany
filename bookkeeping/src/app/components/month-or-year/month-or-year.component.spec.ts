import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthOrYearComponent } from './month-or-year.component';

describe('MonthOrYearComponent', () => {
  let component: MonthOrYearComponent;
  let fixture: ComponentFixture<MonthOrYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthOrYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthOrYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
