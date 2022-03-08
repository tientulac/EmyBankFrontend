import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTransactionComponent } from './popup-transaction.component';

describe('PopupTransactionComponent', () => {
  let component: PopupTransactionComponent;
  let fixture: ComponentFixture<PopupTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
