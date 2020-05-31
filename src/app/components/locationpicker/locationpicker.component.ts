import {Component, OnInit} from '@angular/core';
import {LocationsTaskService} from '../../services/tasks/locations/locations.task.service';
import {City} from "../../models/location/City";

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

    this.taskService.getDistricts(province).subscribe((response: City[]) => {
      console.log(response);
      response.forEach(districts => {
        this.districts.push(districts.city);
      });
    });
  }

  onProvinceChange() {
    console.log(this.selectedProvince);
  }

  onDistrictChange() {
    console.log(this.selectedDistrict);
  }
}
