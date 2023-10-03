import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema02ComunicacionComponentesComponent } from './tema02-comunicacion-componentes.component';

describe('Tema02ComunicacionComponentesComponent', () => {
  let component: Tema02ComunicacionComponentesComponent;
  let fixture: ComponentFixture<Tema02ComunicacionComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema02ComunicacionComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema02ComunicacionComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
