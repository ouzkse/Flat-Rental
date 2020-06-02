import {RentalInfo} from './RentalInfo';
import {LocationObject} from '../location/LocationObject';
import {Review} from './Review';
import {KeyValuePair} from '../common/KeyValuePair';
import {Price} from './Price';

export class Rental {
  _id: string;
  email: string;
  rentalInfo: RentalInfo;
  locationInfo: LocationObject;
  reviews: Review[];
  price: Price;
  notAvailableDates: Date[];
  photos: string[];
  features: KeyValuePair[];
  rentalAddedDate: Date;
  avgPoints: number;
}
