import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFalseComponent } from './alert-false.component';

describe('AlertFalseComponent', () => {
  let component: AlertFalseComponent;
  let fixture: ComponentFixture<AlertFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
