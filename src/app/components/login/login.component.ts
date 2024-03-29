import {Component, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginTaskService} from '../../services/tasks/authentication/login/login.task.service';
import {LoginUserCredentials} from '../../models/authentication/LoginUserCredentials';
import {MainNavigationService} from "../../services/navigation/main/main.navigation.service";
import {MainNavigationEnum} from "../../models/navigationcontrol/MainNavigationEnum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  minPasswordLength = 8;
  hidePassword = true;
  password = '';
  loginClicked = false;
  serviceResponse = '';

  navigationValue = MainNavigationEnum

  constructor(private mainNavigationService: MainNavigationService, private taskService: LoginTaskService) {
  }

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(this.minPasswordLength)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

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

  login() {
    this.taskService.login(this.getLoginCredentials()).subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem('authentication_token', response.body.token);
        this.sendEvent(this.navigationValue.dashboard)
      }
    }, error => {
      this.serviceResponse = 'Invalid Email or Password';
      this.loginClicked = true;
    });
  }

  private getLoginCredentials() {
    return new LoginUserCredentials(this.emailControl.value, this.password);
  }

  sendEvent(eventType: MainNavigationEnum) {
    this.mainNavigationService.setEvent(eventType)
  }
}
