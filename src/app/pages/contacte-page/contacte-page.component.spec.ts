import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactePageComponent } from './contacte-page.component';

describe('ContactePageComponent', () => {
  let component: ContactePageComponent;
  let fixture: ComponentFixture<ContactePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
