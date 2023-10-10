import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  form: FormGroup | null = null
  // form: FormGroup = new FormGroup({})

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = this.initializeForm()
  }

  login() {
    if (this.form) {
      const formValue = this.form.value

      this.authService.login(formValue.username, formValue.password)
    }
  }

  private initializeForm() {
    return new FormGroup({
      username: new FormControl('cfalc', Validators.required),
      password: new FormControl('1234', Validators.required),
    })
  }

}
