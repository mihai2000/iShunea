import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCarieraComponent } from './navbar-cariera.component';

describe('NavbarCarieraComponent', () => {
  let component: NavbarCarieraComponent;
  let fixture: ComponentFixture<NavbarCarieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCarieraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCarieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
