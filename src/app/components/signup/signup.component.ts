import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RegisterUserCredentials, UserInformation} from '../../models/RegisterUserCredentials';
import {RegisterTaskService} from '../../services/tasks/register/register.task.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  hidePassword = true;
  password = '';
  dateOfBirth: string;
  minPasswordLength = 8;
  registerClicked = false;
  serviceResponse = '';

  today = new Date();
  minAge = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());

  constructor(private taskService: RegisterTaskService) { }

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

  register() {
    this.taskService.register(this.createRegistrationObject()).subscribe((response: any) => {
      console.log('SignUp Component', response);
      if (response.status === 201) {
        this.serviceResponse = 'Account is created, You can login now!';
      } else {
        this.serviceResponse = 'Error while registering';
      }
      this.registerClicked = true;
    });
  }

  private createRegistrationObject() {
    return new RegisterUserCredentials(this.emailControl.value,
      this.password,
      new UserInformation(this.nameControl.value,
        this.surnameControl.value,
        this.dateOfBirth,
        ''));
  }
}
