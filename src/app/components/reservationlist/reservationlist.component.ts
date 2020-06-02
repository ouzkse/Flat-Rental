import {Component} from "@angular/core";
import {Reservation} from "../../models/reservation/Reservation";
import {KeyValuePair} from 'src/app/models/common/KeyValuePair';

@Component({
  selector: 'reservation-list',
  templateUrl: './reservationlist.component.html',
  styleUrls: ['./reservationlist.component.css']
})
export class ReservationListComponent {
  reservations = [new Reservation("dhfj", "dhfjdf", "ben@gmail.com",
    "", new Date("03.17.2020"), new Date("04.11.2020"), {key: 36743, value: "TRY"}),
    new Reservation("dhfj", "dhfjdf", "ben@gmail.com",
      "", new Date("05.17.2020"), new Date("06.11.2020"), {key: 232, value: "TRY"}),
    new Reservation("dhfj", "dhfjdf", "ben@gmail.com",
      "", new Date("03.17.2020"), new Date("04.11.2020"), {key: 36743, value: "TRY"}),
    new Reservation("dhfj", "dhfjdf", "ben@gmail.com",
      "", new Date("05.17.2020"), new Date("06.11.2020"), {key: 232, value: "TRY"})
  ]

  ngOnInit() {
    console.log(this.reservations)
  }

}
