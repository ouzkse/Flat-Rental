import {NgModule} from '@angular/core';
import {AccountComponent} from '../components/account/account.component';
import {RouterModule, Routes} from '@angular/router';
import {RentalItemComponent} from '../components/rentalitemcomponent/rentalitemcomponent';
import {SettingsComponent} from "../hostcomponents/settings/settings.component";
import {SwitchComponent} from "../components/switch/switch.component";

const routes: Routes = [
  {
    path: 'rentalItem',
    component: RentalItemComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: 'account', component: AccountComponent},
      {path: 'hostingPreference', component: SwitchComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}

export const appRoutingProviders: any[] = [];
