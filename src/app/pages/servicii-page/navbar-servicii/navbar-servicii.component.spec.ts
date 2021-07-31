import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarServiciiComponent } from './navbar-servicii.component';

describe('NavbarServiciiComponent', () => {
  let component: NavbarServiciiComponent;
  let fixture: ComponentFixture<NavbarServiciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarServiciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarServiciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
