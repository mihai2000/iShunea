import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaConsultatiiComponent } from './comanda-consultatii.component';

describe('ComandaConsultatiiComponent', () => {
  let component: ComandaConsultatiiComponent;
  let fixture: ComponentFixture<ComandaConsultatiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandaConsultatiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaConsultatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
