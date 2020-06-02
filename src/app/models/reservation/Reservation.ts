import {KeyValuePair} from "../common/KeyValuePair";
import {ReservationEnum} from "./ReservationEnum";

export class Reservation {

  constructor(public _id: string,
              public rentalId: string,
              public hostEmail: string,
              public guestEmail: string,
              public checkInDate: Date,
              public checkOutDate: Date,
              public totalPrice: KeyValuePair,
              public status: ReservationEnum = ReservationEnum.PENDING) {
  }
}
