import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcasaDetaliiComponent } from './acasa-detalii.component';

describe('AcasaDetaliiComponent', () => {
  let component: AcasaDetaliiComponent;
  let fixture: ComponentFixture<AcasaDetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcasaDetaliiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcasaDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
