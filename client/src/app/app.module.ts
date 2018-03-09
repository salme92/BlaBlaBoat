import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { MyHomeComponent } from './my-home/my-home.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import * as jquery from 'jquery';
import { AgmCoreModule } from '@agm/core';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhereismytripComponent } from './whereismytrip/whereismytrip.component';
import { routes } from '../routes';
import { MakeTripService } from '../services/make-trip.service';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MyHomeComponent,
    RegistrationComponent,
    FilterPipe,
    WhereismytripComponent,
    MyTripsComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGXCwt_ms1pKq5v1llN5jDZ1lE37K2-A0'
    }),
  ],
  providers: [SessionService,MakeTripService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

