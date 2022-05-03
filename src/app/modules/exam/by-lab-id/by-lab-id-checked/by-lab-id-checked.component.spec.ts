import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLabIdCheckedComponent } from './by-lab-id-checked.component';

describe('ByLabIdCheckedComponent', () => {
  let component: ByLabIdCheckedComponent;
  let fixture: ComponentFixture<ByLabIdCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByLabIdCheckedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLabIdCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
