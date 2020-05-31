import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RegisterUserCredentials, UserInformation} from '../../models/authentication/RegisterUserCredentials';
import {RegisterTaskService} from '../../services/tasks/authentication/register/register.task.service';
import {IgxToastPosition} from 'igniteui-angular';
import {MainNavigationService} from "../../services/navigation/main/main.navigation.service";
import {MainNavigationEnum} from "../../models/navigationcontrol/MainNavigationEnum";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  public toastPosition: IgxToastPosition = IgxToastPosition.Top;

  hidePassword = true;
  password = '';
  dateOfBirth: string;
  minPasswordLength = 8;
  registerClicked = false;
  serviceResponse = '';

  today = new Date();
  minAge = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());

  navigationValue = MainNavigationEnum

  constructor(private mainNavigationService: MainNavigationService, private taskService: RegisterTaskService) {
  }

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
        this.sendEvent(this.navigationValue.showToast)
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

  public showToast(toast, position) {
    switch (position) {
      case 'middle':
        this.toastPosition = IgxToastPosition.Middle;
        break;
      case 'top':
        this.toastPosition = IgxToastPosition.Top;
        break;
      default:
        this.toastPosition = IgxToastPosition.Top;
    }

    toast.show();
  }

  sendEvent(eventType: MainNavigationEnum) {
    this.mainNavigationService.setEvent(eventType)
  }
}
