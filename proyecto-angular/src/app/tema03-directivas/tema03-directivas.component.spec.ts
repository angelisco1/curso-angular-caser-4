import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema03DirectivasComponent } from './tema03-directivas.component';

describe('Tema03DirectivasComponent', () => {
  let component: Tema03DirectivasComponent;
  let fixture: ComponentFixture<Tema03DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema03DirectivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema03DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
