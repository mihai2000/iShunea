import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaApelComponent } from './comanda-apel.component';

describe('ComandaApelComponent', () => {
  let component: ComandaApelComponent;
  let fixture: ComponentFixture<ComandaApelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandaApelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaApelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
