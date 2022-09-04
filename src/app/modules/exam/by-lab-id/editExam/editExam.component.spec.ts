/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditExamComponent } from './editExam.component';

describe('EditExamComponent', () => {
  let component: EditExamComponent;
  let fixture: ComponentFixture<EditExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
