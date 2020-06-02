import {RentalInfo} from './RentalInfo';
import {LocationObject} from '../location/LocationObject';
import {Review} from './Review';
import {KeyValuePair} from '../common/KeyValuePair';
import {KeyValue} from "@angular/common";
import {Price} from './Price';

export class Rental {
  _id: string;
  title: string;
  email: string;
  rentalInfo: RentalInfo;
  locationInfo: LocationObject;
  reviews: Review[];
  price: Price;
  notAvailableDates: Date[];
  photos: string[];
  features: KeyValue<String, Boolean>[];
  rentalAddedDate: Date;
  avgPoints: number;
}
