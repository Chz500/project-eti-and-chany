import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenTwoDatesComponent } from './between-two-dates.component';

describe('BetweenTwoDatesComponent', () => {
  let component: BetweenTwoDatesComponent;
  let fixture: ComponentFixture<BetweenTwoDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetweenTwoDatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetweenTwoDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
