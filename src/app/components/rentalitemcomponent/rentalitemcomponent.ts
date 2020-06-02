import {Component, Input, OnInit} from '@angular/core';
import {Rental} from '../../models/rental/Rental';
import {RentaldetailService} from '../../services/rentaldetail/rentaldetail.service';
import {RentalDataService} from '../../services/data/rental/rental.data.service';

@Component({
  selector: 'app-rentalitemcomponent',
  templateUrl: './rentalitemcomponent.html',
  styleUrls: ['./rentalitemcomponent.css']
})
export class RentalItemComponent implements OnInit {

  rental = new Rental();
  photos = [];

  constructor(private service: RentaldetailService, public dataService: RentalDataService) {
    dataService.rentalDetail.subscribe( rentalDetail => {
      this.rental = rentalDetail
      console.log("detail alıyo"+rentalDetail.rentalAddedDate)
    })
  }

  ngOnInit(): void {
    this.loadSelectedRental()
  }

  loadSelectedRental() {
    /*this.service.getSelectedRental(this.rental).subscribe( (response: any) => {
      if (response.status === 200) {

      }
    });*/
    this.photos = this.rental.photos;
  }

}
