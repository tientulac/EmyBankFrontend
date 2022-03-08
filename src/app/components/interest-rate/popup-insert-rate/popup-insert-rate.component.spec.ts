import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInsertRateComponent } from './popup-insert-rate.component';

describe('PopupInsertRateComponent', () => {
  let component: PopupInsertRateComponent;
  let fixture: ComponentFixture<PopupInsertRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInsertRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInsertRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
