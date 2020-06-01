import {Component} from "@angular/core";

@Component({
  selector: 'switch-component',
  templateUrl: './switch.component.html',
  styleUrls: ['switch.component.css']
})
export class SwitchComponent {

  headerText: String = "Enable Hosting"
  subText: String = "This is subtext"
  switchValue: Boolean = false
}
