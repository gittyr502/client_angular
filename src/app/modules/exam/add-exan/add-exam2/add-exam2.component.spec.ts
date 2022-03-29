import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExam2Component } from './add-exam2.component';

describe('AddExam2Component', () => {
  let component: AddExam2Component;
  let fixture: ComponentFixture<AddExam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
