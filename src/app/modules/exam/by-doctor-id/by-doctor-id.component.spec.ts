import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDoctorIdComponent } from './by-doctor-id.component';

describe('ByDoctorIdComponent', () => {
  let component: ByDoctorIdComponent;
  let fixture: ComponentFixture<ByDoctorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDoctorIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByDoctorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
