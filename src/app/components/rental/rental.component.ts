import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {component} from "@igniteui/angular-schematics/src/component";
import {PostRentalComponent} from "../postrental/postrental.component";

@Component({
  selector: 'app-post-rental',
  templateUrl: 'rental.component.html',
  styleUrls: ['rental.component.css']
})
export class RentalComponent {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  postNewRental() {
    this.dialog.closeAll()
    this.dialog.open(PostRentalComponent, {disableClose: true, width: '80%'})
  }
}
