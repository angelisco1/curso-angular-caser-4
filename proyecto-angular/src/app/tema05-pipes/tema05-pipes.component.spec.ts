import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema05PipesComponent } from './tema05-pipes.component';

describe('Tema05PipesComponent', () => {
  let component: Tema05PipesComponent;
  let fixture: ComponentFixture<Tema05PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema05PipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema05PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
