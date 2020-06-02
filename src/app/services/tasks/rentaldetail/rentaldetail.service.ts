import {Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {Rental} from '../../../models/rental/Rental';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {

  constructor(private requestService: ApiService) {
  }

  /* getSelectedRental(selectedRental: Rental) {
    return this.requestService.post('rentals/getSelectedRental', selectedRental._id)
  } */
}
