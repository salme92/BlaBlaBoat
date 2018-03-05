import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { MyHomeComponent } from './my-home/my-home.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { WhereismytripComponent } from './whereismytrip/whereismytrip.component';
import * as jquery from 'jquery';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'whereismytrip', component: WhereismytripComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MyHomeComponent,
    RegistrationComponent,
    FilterPipe,
    WhereismytripComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),



  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
