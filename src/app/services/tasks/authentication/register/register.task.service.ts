import { Injectable } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { RegisterUserCredentials } from '../../../../models/authentication/RegisterUserCredentials';

@Injectable({
  providedIn: 'root'
})
export class RegisterTaskService {

  constructor(private requestService: ApiService) { }

  register(credentials: RegisterUserCredentials) {
    return this.requestService.post('authentication/register', credentials);
  }
}
