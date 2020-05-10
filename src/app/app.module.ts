import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {ImageUploaderComponent} from './imageuploader/imageuploader.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {AccountComponent} from './account/account.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import {MatNativeDateModule} from '@angular/material/core';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ImageUploaderComponent,
    ToolbarComponent,
    AccountComponent,
    SignupComponent
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
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent, LoginComponent]
})
export class AppModule { }
