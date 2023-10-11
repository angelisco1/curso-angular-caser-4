import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVendehumoComponent } from './editar-vendehumo.component';

describe('EditarVendehumoComponent', () => {
  let component: EditarVendehumoComponent;
  let fixture: ComponentFixture<EditarVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVendehumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
