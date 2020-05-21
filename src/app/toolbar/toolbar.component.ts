import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignupComponent} from '../signup/signup.component';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog, public router: Router) {}

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '40%'
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '40%'
    });
  }

  account() {
    this.router.navigate(['account']);
  }

  home() {
    this.router.navigate(['']);
  }
}
