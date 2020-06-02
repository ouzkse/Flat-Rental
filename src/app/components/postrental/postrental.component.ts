import {Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Rental} from "../../models/rental/Rental";
import {LocationDataService} from "../../services/data/location/location.data.service";
import {KeyValuePair} from "../../models/common/KeyValuePair";
import {MAT_CHECKBOX_CLICK_ACTION} from "@angular/material/checkbox";
import {ImageFileDataService} from "../../services/data/image/image.data.service";
import {LocationObject} from "../../models/location/LocationObject";
import {RentalInfo} from "../../models/rental/RentalInfo";
import {RentalTaskService} from "../../services/tasks/rental/rental.task.service";

@Component({
  selector: 'app-post-rental',
  templateUrl: 'postrental.component.html',
  styleUrls: ['postrental.component.css'],
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class PostRentalComponent {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  location: LocationObject
  isLocationSelected: Boolean = false;
  isEnabled = false
  currencyType = 'option0';
  imageFiles = [];

  uploadForm: FormGroup;

  features = [{key: "Wi-Fi", value: false}, {key: "Kitchen", value: false},
    {key: "Hangers", value: false}, {key: "Laptop-friendly workspace", value: false},
    {key: "Heating", value: false}, {key: "Essentials", value: false},
    {key: "Air conditioning", value: false}, {key: "Hair dryer", value: false}, {key: "Indoor fireplace", value: false}]

  newRentalData = new Rental()

  constructor(private _formBuilder: FormBuilder,
              private locationDataService: LocationDataService,
              private imageFileDataService: ImageFileDataService,
              private taskService: RentalTaskService) {
    this.locationDataService.isLocationSelected.subscribe(value => {
      console.log(value)
      this.isLocationSelected = true
      this.location = value
      console.log(this.isLocationSelected)
    })

    this.imageFileDataService.imageFiles.subscribe(imageFiles => {
      this.imageFiles = []
      imageFiles.forEach(files => {
        this.imageFiles.push(files.value)
      })
    })
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      first_title_control: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      roomControl: ['', Validators.required],
      bedControl: ['', Validators.required],
      bathControl: ['', Validators.required],
      guestControl: ['', Validators.required],
      descriptionControl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      amountControl: ['', Validators.required]
    })

    this.uploadForm = this._formBuilder.group({
      title: [''],
      email: ['oguzkose12@gmail.com'],
      info: [RentalInfo],
      location: [LocationObject],
      price: [''],
      photos: [''],
      features: ['']
    })
  }

  enableButton() {
    this.isEnabled = true;
  }

  onClick() {
    console.log(this.features)
  }

  changeSelectedFeature(key: string, value) {
    this.features.filter(item => item.key === key)[0].value = value
  }

  firstStageAction() {
    this.uploadForm.get('title').setValue(this.firstFormGroup.value)
  }

  secondStageAction() {
    this.uploadForm.get('info').setValue(new RentalInfo(this.secondFormGroup.get('roomControl').value,
      this.secondFormGroup.get('bedControl').value,
      this.secondFormGroup.get('bathControl').value,
      this.secondFormGroup.get('guestControl').value,
      this.secondFormGroup.get('descriptionControl').value))
  }

  onSubmit() {
    const formData = new FormData()
    // formData.append('title', this.firstFormGroup.value.toString())
    formData.append('info', JSON.stringify(new RentalInfo(this.secondFormGroup.get('roomControl').value.toString(),
      this.secondFormGroup.get('bedControl').value.toString(),
      this.secondFormGroup.get('bathControl').value.toString(),
      this.secondFormGroup.get('guestControl').value.toString(),
      this.secondFormGroup.get('descriptionControl').value.toString())))

    for (let i = 0; i < this.imageFiles.length; i++) {
      formData.append("photos", this.imageFiles[i], this.imageFiles[i].name);
    }

    formData.append('location', JSON.stringify(this.location))
    formData.append('price', '{ "amount":' + this.thirdFormGroup.get('amountControl').value + ', "currency": "TRY"}')
    formData.append('features', JSON.stringify(this.features))

    console.log(formData.toString())

    console.log(JSON.stringify(formData))

    formData.forEach((value, key) => {
      console.log(key + " " + value)
    });
    this.taskService.addNewRental(formData).subscribe((response: any) => {
      if (response.status === 200) {
        console.log("OK")
        console.log(response)
      }
    })
  }
}
