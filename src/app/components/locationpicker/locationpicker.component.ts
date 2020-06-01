import {Component, OnInit} from '@angular/core';
import {LocationsTaskService} from '../../services/tasks/locations/locations.task.service';
import {City} from '../../models/location/City';
import {Rental} from '../../models/rental/Rental';
import {SearchCredentials} from '../../models/rental/SearchCredentials';
import {LocationObject} from '../../models/location/LocationObject';

@Component({
  selector: 'app-location-picker',
  templateUrl: './locationpicker.component.html',
  styleUrls: ['locationpicker.component.css']
})
export class LocationPickerComponent implements OnInit {
  selectedCountry = 'option0';
  selectedProvince: string;
  selectedDistrict: string;

  provinces = Array<string>();
  districts = Array<string>();
  rentals = Array<Rental>();

  constructor(private taskService: LocationsTaskService) { }

  ngOnInit() {
    this.getProvinces();
  }

  getProvinces() {
    this.taskService.getProvinces().subscribe((response: City[]) => {
      console.log(response);
      response.forEach(value => {
        this.provinces.push(value.city);
      });
    });
  }

  getDistricts(province: string) {
    this.districts = [];
    this.selectedProvince = province;

    this.taskService.getDistricts(province).subscribe((response: City[]) => {
      console.log(response);
      response.forEach(districts => {
        this.districts.push(districts.city);
      });
    });

  }

  private getSearchCredentials() {
    return new SearchCredentials(new LocationObject("Turkey", this.selectedProvince, this.selectedDistrict), 1, 10)
  }

  searchRentals() {
    this.taskService.searchRentals(this.getSearchCredentials()).subscribe((response: any) => {
      console.log(response);

      if( response.status === 200 ) {
        response.forEach( rentals => {
          // this.rentals.push(new Rental())
        })
      }
    }, error => {

    });
  }

  onProvinceChange() {
    console.log(this.selectedProvince);
  }

  onDistrictChange() {
    console.log(this.selectedDistrict);
  }
}
