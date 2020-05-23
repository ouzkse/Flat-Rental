import { NgModule } from '@angular/core';
import { AccountComponent} from '../components/account/account.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
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
