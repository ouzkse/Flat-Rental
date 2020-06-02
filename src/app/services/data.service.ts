import { Injectable } from '@angular/core';
import {Rental} from '../models/rental/Rental';

@Injectable()
export class DataService {
  serviceData: Rental[];
}
