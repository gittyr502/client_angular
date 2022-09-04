import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByManagerIdComponent } from './by-manager-id.component';

describe('ByManagerIdComponent', () => {
  let component: ByManagerIdComponent;
  let fixture: ComponentFixture<ByManagerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByManagerIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByManagerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
