import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDespreNoiComponent } from './navbar-despre-noi.component';

describe('NavbarDespreNoiComponent', () => {
  let component: NavbarDespreNoiComponent;
  let fixture: ComponentFixture<NavbarDespreNoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDespreNoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDespreNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
