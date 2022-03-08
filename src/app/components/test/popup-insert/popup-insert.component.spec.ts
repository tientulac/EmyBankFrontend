import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInsertComponent } from './popup-insert.component';

describe('PopupInsertComponent', () => {
  let component: PopupInsertComponent;
  let fixture: ComponentFixture<PopupInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
