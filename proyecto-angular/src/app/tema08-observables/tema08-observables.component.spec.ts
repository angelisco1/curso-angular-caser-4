import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema08ObservablesComponent } from './tema08-observables.component';

describe('Tema08ObservablesComponent', () => {
  let component: Tema08ObservablesComponent;
  let fixture: ComponentFixture<Tema08ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema08ObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema08ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
