import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FooterComponent} from './components/footer/footer.component';
import {ImageUploaderComponent} from './components/imageuploader/imageuploader.component';
import {LocationPickerComponent} from './components/locationpicker/locationpicker.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {AccountComponent} from './components/account/account.component';
import {SignUpComponent} from './components/signup/signup.component';
import {PopupComponent} from './components/popup/popup.component';
import {RentalItemComponent} from './components/rentalitemcomponent/rentalitemcomponent';
import {SettingsComponent} from "./hostcomponents/settings/settings.component";
import {SwitchComponent} from "./components/switch/switch.component";
import {ReservationListComponent} from "./components/reservationlist/reservationlist.component";
import {BrowseComponent} from "./hostcomponents/browse/browse.component";
import {PostRentalComponent} from "./components/postrental/postrental.component";
import {RentalComponent} from "./components/rental/rental.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {AppRoutingModule, appRoutingProviders} from './app-routing/app-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
  IgxListModule,
  IgxGridModule,
  IgxDividerModule
} from 'igniteui-angular';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {IgxToastModule} from 'igniteui-angular';
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CdkTableModule} from '@angular/cdk/table';
import {MatStepperModule} from "@angular/material/stepper";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ImageUploaderComponent,
    ToolbarComponent,
    AccountComponent,
    SignUpComponent,
    LocationPickerComponent,
    PopupComponent,
    RentalItemComponent,
    SettingsComponent,
    SwitchComponent,
    ReservationListComponent,
    BrowseComponent,
    RentalComponent,
    PostRentalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatBadgeModule,
    MatGridListModule,
    MatIconModule,
    RouterModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    HttpClientModule,
    IgxToastModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule,
    CommonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    IgxRippleModule,
    IgxListModule,
    CdkTableModule,
    IgxGridModule,
    IgxDividerModule,
    MatStepperModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatSidenavModule,
    MatSlideToggleModule
  ],
  providers: [appRoutingProviders, DataService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
