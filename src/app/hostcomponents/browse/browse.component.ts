import {Component, OnInit} from '@angular/core';
import {Rental} from '../../models/rental/Rental';
import {RentalDataService} from '../../services/data/rental/rental.data.service';
import {MainNavigationEnum} from '../../models/navigationcontrol/MainNavigationEnum';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  browseNavigationValue = MainNavigationEnum;

  constructor(public dataService: RentalDataService, private mainNavigationService: MainNavigationService) {
    dataService.rental.subscribe(rentals => {
      this.rentals = rentals;
    })

  }
  rentals = Array<Rental>();

  ngOnInit() {

  }

  sendEvent(eventType: MainNavigationEnum, rental: Rental) {
    // this.dataService.setRentalDetail(rental)
    console.log("browste yolluyo"+rental._id)
    this.mainNavigationService.setEvent(eventType)
  }}
