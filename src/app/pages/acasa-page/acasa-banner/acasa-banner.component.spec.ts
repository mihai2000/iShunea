import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcasaBannerComponent } from './acasa-banner.component';

describe('AcasaBannerComponent', () => {
  let component: AcasaBannerComponent;
  let fixture: ComponentFixture<AcasaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcasaBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcasaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
