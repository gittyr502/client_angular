import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddExanComponent } from './add-exan.component';

describe('AddExanComponent', () => {
  let component: AddExanComponent;
  let fixture: ComponentFixture<AddExanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('MyComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [AddExanComponent],
          imports: [ReactiveFormsModule],  // Also add it to 'imports' array
      })
      .compileComponents();
  }));
});
