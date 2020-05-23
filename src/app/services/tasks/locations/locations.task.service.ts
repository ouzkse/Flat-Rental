import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsTaskService {

  constructor(private requestService: ApiService) { }

  getProvinces() {
    return this.requestService.get('cities/getProvinces');
  }

  getDistricts(province: string) {
    return this.requestService.get('cities/' + province);
  }
}
