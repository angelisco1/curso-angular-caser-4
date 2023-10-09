import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {

  formData = {
    nombre: 'angel',
    email: 'angel@gmail.com',
    password: '1234'
  }

  registro(form: NgForm) {
    // console.log(this.formData)
    console.log(form)

    // Datos del formulario para enviar al back
    console.log(form.value)
  }

}


// {
//   controls: {
//     nombre: {
//       value: 'angel'
//     },
//     email: {
//       value: ''
//     },
//     password: {...}
//   }
// }