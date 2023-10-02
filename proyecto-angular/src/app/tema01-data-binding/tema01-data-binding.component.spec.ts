import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema01DataBindingComponent } from './tema01-data-binding.component';

describe('Tema01DataBindingComponent', () => {
  let component: Tema01DataBindingComponent;
  let fixture: ComponentFixture<Tema01DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema01DataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema01DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
