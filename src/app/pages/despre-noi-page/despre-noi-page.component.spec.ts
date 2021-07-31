import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreNoiPageComponent } from './despre-noi-page.component';

describe('DespreNoiPageComponent', () => {
  let component: DespreNoiPageComponent;
  let fixture: ComponentFixture<DespreNoiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespreNoiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespreNoiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
