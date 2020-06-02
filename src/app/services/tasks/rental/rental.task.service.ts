import {Injectable} from '@angular/core';
import {ApiService} from "../../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class RentalTaskService {

  constructor(private requestService: ApiService) {
  }

  addNewRental(formData) {
    return this.requestService.post('rentals/addNewRental', formData, true)
  }
}
