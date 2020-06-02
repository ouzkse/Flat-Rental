import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {LocationObject} from "../../../models/location/LocationObject";

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  private _isLocationSelected = new Subject<LocationObject>()
  isLocationSelected = this._isLocationSelected.asObservable()

  constructor() {
  }

  setSelected(location: LocationObject) {
    this._isLocationSelected.next(location)
  }
}
