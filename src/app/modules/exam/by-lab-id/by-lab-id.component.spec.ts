import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLabIdComponent } from './by-lab-id.component';

describe('ByLabIdComponent', () => {
  let component: ByLabIdComponent;
  let fixture: ComponentFixture<ByLabIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByLabIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLabIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
