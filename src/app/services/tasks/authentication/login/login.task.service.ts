import { Injectable } from '@angular/core';
import {ApiService} from '../../../api/api.service';
import {LoginUserCredentials} from '../../../../models/authentication/LoginUserCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginTaskService {

  constructor(private requestService: ApiService) { }

  login(loginCredentials: LoginUserCredentials) {
    return this.requestService.post('authentication/login', loginCredentials);
  }

  isUserLoggedIn() {
    return !!localStorage.getItem('authentication_token');
  }

  logout() {
    localStorage.removeItem('authentication_token');
  }
}
