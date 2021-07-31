import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContacteComponent } from './navbar-contacte.component';

describe('NavbarContacteComponent', () => {
  let component: NavbarContacteComponent;
  let fixture: ComponentFixture<NavbarContacteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarContacteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarContacteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
