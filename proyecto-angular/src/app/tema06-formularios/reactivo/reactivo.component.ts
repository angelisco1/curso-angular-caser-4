import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent {

  form: FormGroup

  constructor() {
    this.form = this.initializeForm()
  }

  get passwordErrors() {
    return this.form.get('password')?.errors
  }

  private initializeForm() {
    return new FormGroup({
      nombre: new FormControl('angel', Validators.required),
      email: new FormControl('', [Validators.required]),
      // password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      password: new FormControl('', [CustomValidators.passwordSegura(7)]),
    })
  }

  registro() {
    console.log(this.form)
  }

}

// {
//   nombre: {
//     type: 'text',
//     value: 'angel',
//     validations: [Validators.required]
//   }
// }

// -> Validaciones que no necesitan datos extra: required, email

// static required(control: AbstractControl): ValidationErrors | null {
//   return {required: true}
// }



// -> Validaciones que necesitan datos extra: minLength(7), max(100)

// static minLength(minLength: number): ValidatorFn {
// return (control: AbstractControl): ValidationErrors | null {
// return {minlength: {actualLength: 1, requiredLength: 7}}
// }
// }



// export declare interface ValidatorFn {
//     (control: AbstractControl): ValidationErrors | null;
// }