import { NgModule } from '@angular/core';
import { AccountComponent} from '../components/account/account.component';
import {RouterModule, Routes} from '@angular/router';
import {RentalItemComponent} from '../components/rentalitemcomponent/rentalitemcomponent';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'rentalItem',
    component: RentalItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
