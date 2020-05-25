import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignUpComponent} from '../signup/signup.component';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';
import {LoginTaskService} from '../../services/tasks/login/login.task.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog, public router: Router, private taskService: LoginTaskService) { }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
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

  logout() {
    this.taskService.logout();
    this.router.navigate(['']);
  }

  isAuthenticated() {
    return this.taskService.isUserLoggedIn();
  }
}
