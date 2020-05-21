import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private requestService: HttpApiService) { }

  getProvinces() {
    return this.requestService.get('cities/getProvinces');
  }

  getDistricts(province: string) {
    return this.requestService.get('cities/' + province);
  }
}
