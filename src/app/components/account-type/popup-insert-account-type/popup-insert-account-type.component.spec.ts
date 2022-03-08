import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInsertAccountTypeComponent } from './popup-insert-account-type.component';

describe('PopupInsertAccountTypeComponent', () => {
  let component: PopupInsertAccountTypeComponent;
  let fixture: ComponentFixture<PopupInsertAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInsertAccountTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInsertAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
