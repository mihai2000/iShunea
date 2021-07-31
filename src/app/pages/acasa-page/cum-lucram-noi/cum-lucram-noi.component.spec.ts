import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumLucramNoiComponent } from './cum-lucram-noi.component';

describe('CumLucramNoiComponent', () => {
  let component: CumLucramNoiComponent;
  let fixture: ComponentFixture<CumLucramNoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumLucramNoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumLucramNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
