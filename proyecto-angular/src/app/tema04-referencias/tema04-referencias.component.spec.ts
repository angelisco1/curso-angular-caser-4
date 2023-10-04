import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema04ReferenciasComponent } from './tema04-referencias.component';

describe('Tema04ReferenciasComponent', () => {
  let component: Tema04ReferenciasComponent;
  let fixture: ComponentFixture<Tema04ReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema04ReferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema04ReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
