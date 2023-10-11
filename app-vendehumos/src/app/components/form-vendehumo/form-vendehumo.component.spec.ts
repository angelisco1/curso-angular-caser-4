import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVendehumoComponent } from './form-vendehumo.component';

describe('FormVendehumoComponent', () => {
  let component: FormVendehumoComponent;
  let fixture: ComponentFixture<FormVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVendehumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
