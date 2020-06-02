import { Injectable } from '@angular/core';
import {Rental} from '../../../models/rental/Rental';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalDataService {
  private _rental = new Subject<Array<Rental>>();
  rental = this._rental.asObservable();

  private _rentalDetail = new Subject<Rental>();
  rentalDetail = this._rentalDetail.asObservable()

  constructor() { }

  setRental(eventValue: Rental[] = []) {
      this._rental.next(eventValue);
  }

  setRentalDetail(eventValue: Rental) {
    this._rentalDetail.next(eventValue)
  }
}


