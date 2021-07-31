import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPortfolioComponent } from './navbar-portfolio.component';

describe('NavbarPortfolioComponent', () => {
  let component: NavbarPortfolioComponent;
  let fixture: ComponentFixture<NavbarPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
