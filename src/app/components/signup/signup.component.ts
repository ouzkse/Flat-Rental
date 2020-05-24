import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  hidePassword = true;
  password = '';
  minPasswordLength = 8;

  today = new Date();
  minAge = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  nameControl = new FormControl('', [Validators.required]);
  surnameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(this.minPasswordLength)]);

  getEmailErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }
    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.passwordControl.hasError('required')) {
      return 'You must enter a password';
    }
    return this.passwordControl.hasError('minLength') ? '' : 'Password length should at least 8 characters';
  }
}
