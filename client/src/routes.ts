// app.module.ts
import { Routes } from "@angular/router";
import { MyHomeComponent } from "./app/my-home/my-home.component";
import { RegistrationComponent } from "./app/registration/registration.component";
import { WhereismytripComponent } from "./app/whereismytrip/whereismytrip.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'whereismytrip', component: WhereismytripComponent}
];

module.exports = routes;