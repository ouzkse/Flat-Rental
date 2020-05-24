import { Injectable } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {RegisterUserCredentials} from '../../../models/RegisterUserCredentials';
import {shareReplay, tap} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterTaskService {

  constructor(private requestService: ApiService) { }

  register(credentials: RegisterUserCredentials) {
    return this.requestService.post('user/register', credentials);
  }
}
