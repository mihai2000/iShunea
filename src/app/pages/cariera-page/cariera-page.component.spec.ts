import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarieraPageComponent } from './cariera-page.component';

describe('CarieraPageComponent', () => {
  let component: CarieraPageComponent;
  let fixture: ComponentFixture<CarieraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarieraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarieraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
