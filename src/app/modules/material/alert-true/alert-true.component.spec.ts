import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTrueComponent } from './alert-true.component';

describe('AlertTrueComponent', () => {
  let component: AlertTrueComponent;
  let fixture: ComponentFixture<AlertTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertTrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
