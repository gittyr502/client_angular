import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamLabComponent } from './add-exam-lab.component';

describe('AddExamLabComponent', () => {
  let component: AddExamLabComponent;
  let fixture: ComponentFixture<AddExamLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExamLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
