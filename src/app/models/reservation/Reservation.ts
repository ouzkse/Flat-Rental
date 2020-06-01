import {KeyValuePair} from "../common/KeyValuePair";
import {ReservationEnum} from "./ReservationEnum";

export class Reservation {
  
  constructor(private _id: string,
              private rentalId: string,
              private hostEmail: string,
              private guestEmail: string,
              private checkInDate: Date,
              private checkOutDate: Date,
              private totalPrice: KeyValuePair,
              private status: ReservationEnum = ReservationEnum.PENDING) {
  }
}
