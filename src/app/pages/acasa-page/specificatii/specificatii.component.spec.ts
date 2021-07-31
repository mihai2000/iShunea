import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificatiiComponent } from './specificatii.component';

describe('SpecificatiiComponent', () => {
  let component: SpecificatiiComponent;
  let fixture: ComponentFixture<SpecificatiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificatiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
