import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import {SearchCredentials} from '../../../models/rental/SearchCredentials';
import {Rental} from '../../../models/rental/Rental';

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

  searchRentals(searchCredentials: SearchCredentials) {
    return this.requestService.post('search/searchRentals', searchCredentials)
  }
}
