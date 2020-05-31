import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignUpComponent} from '../signup/signup.component';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';
import {LoginTaskService} from '../../services/tasks/authentication/login/login.task.service';
import {MainNavigationEnum} from "../../models/navigationcontrol/MainNavigationEnum";
import {MainNavigationService} from "../../services/navigation/main/main.navigation.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  toolbarNavigationValue = MainNavigationEnum;

  constructor(private mainNavigationService: MainNavigationService, private taskService: LoginTaskService) {
  }

  logout() {
    this.taskService.logout();
    this.mainNavigationService.setEvent();
    // this.router.navigate(['']);
  }

  isAuthenticated() {
    return this.taskService.isUserLoggedIn();
  }

  sendEvent(eventType: MainNavigationEnum) {
    this.mainNavigationService.setEvent(eventType)
  }
}
