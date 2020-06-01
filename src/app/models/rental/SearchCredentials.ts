import {LocationObject} from '../location/LocationObject';

export class SearchCredentials {

  constructor(private location: LocationObject, private page: number, private limit: number) {
  }
}
