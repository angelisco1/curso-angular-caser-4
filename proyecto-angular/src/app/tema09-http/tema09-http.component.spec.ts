import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema09HttpComponent } from './tema09-http.component';

describe('Tema09HttpComponent', () => {
  let component: Tema09HttpComponent;
  let fixture: ComponentFixture<Tema09HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema09HttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema09HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
