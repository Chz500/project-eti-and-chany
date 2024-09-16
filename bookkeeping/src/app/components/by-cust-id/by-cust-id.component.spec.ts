import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCustIdComponent } from './by-cust-id.component';

describe('ByCustIdComponent', () => {
  let component: ByCustIdComponent;
  let fixture: ComponentFixture<ByCustIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCustIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCustIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
