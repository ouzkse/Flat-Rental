import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainNavigationEnum} from "./models/navigationcontrol/MainNavigationEnum";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/signup/signup.component";
import {MainNavigationService} from "./services/navigation/main/main.navigation.service";
import {ComponentType} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flat-rental';

  constructor(private mainNavigationService: MainNavigationService, private dialog: MatDialog, private router: Router) {
    this.mainNavigationService.event.subscribe(event => {
      this.evaluateEvent(event)
    })
  }

  ngOnInit(): void {
    this.router.navigate(['settings']);
  }

  evaluateEvent(event: MainNavigationEnum) {
    if (event == MainNavigationEnum.login) {
      this.openDialog(LoginComponent)
    } else if (event == MainNavigationEnum.register) {
      this.openDialog(SignUpComponent)
    } else if (event == MainNavigationEnum.dashboard) {
      this.navigate('dashboard')
    } else if (event == MainNavigationEnum.browse) {
      this.navigate('browse')
    } else if (event == MainNavigationEnum.settings) {
      this.navigate('account')
    } else if (event == MainNavigationEnum.showToast) {
      // TODO
    }
  }

  navigate(route: string) {
    this.dialog.closeAll()
    this.router.navigate([route])
  }

  openDialog(component: ComponentType<any>) {
    this.dialog.closeAll()
    this.dialog.open(component, {width: '40%'})
  }
}
