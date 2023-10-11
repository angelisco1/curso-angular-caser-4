import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vendehumo } from 'src/app/types/vendehumo.type';

@Component({
  selector: 'app-form-vendehumo',
  templateUrl: './form-vendehumo.component.html',
  styleUrls: ['./form-vendehumo.component.css']
})
export class FormVendehumoComponent {
  form: FormGroup = new FormGroup({})
  @Input() vendehumo: Vendehumo | null = null
  @Output() onSave = new EventEmitter<Vendehumo>()

  ngOnInit() {
    if (this.vendehumo) {
      this.form = this.initializeFormWithData()
    } else {
      this.form = this.initializeForm()
    }
  }

  guardar() {
    console.log(this.form.value)
    this.onSave.emit(this.form.value)
  }

  private initializeForm() {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      numVotos: new FormControl(0),
      id: new FormControl(''),
    })
  }

  private initializeFormWithData() {
    return new FormGroup({
      nombre: new FormControl(this.vendehumo?.nombre, Validators.required),
      categoria: new FormControl(this.vendehumo?.categoria, Validators.required),
      foto: new FormControl(this.vendehumo?.foto, Validators.required),
      numVotos: new FormControl(this.vendehumo?.numVotos),
      id: new FormControl(this.vendehumo?.id),
    })
  }

}
