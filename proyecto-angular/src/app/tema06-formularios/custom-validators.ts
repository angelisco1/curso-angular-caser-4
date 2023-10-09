import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class CustomValidators {

  static passwordSegura(minLength: number): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      console.log('VALIDANDO EL CAMPO DE PASSWORD')

      if (control.value.length < minLength) {
        return { minLength: true }
      }

      if (!new RegExp('[a-z]+').test(control.value)) {
        return { letters: true }
      }

      if (!new RegExp('[0-9]+').test(control.value)) {
        return { numbers: true }
      }

      if (!(control.value.includes('-') || control.value.includes('.'))) {
        return { symbols: true }
      }

      return null
    }

  }

}