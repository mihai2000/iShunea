import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiPageComponent } from './servicii-page.component';

describe('ServiciiPageComponent', () => {
  let component: ServiciiPageComponent;
  let fixture: ComponentFixture<ServiciiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
