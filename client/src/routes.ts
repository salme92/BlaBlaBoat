// app.module.ts
import { Routes } from "@angular/router";
import { MyHomeComponent } from "./app/my-home/my-home.component";
import { RegistrationComponent } from "./app/registration/registration.component";
import { WhereismytripComponent} from "../src/app/whereismytrip/whereismytrip.component"

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'whereismytrip', component: WhereismytripComponent}
];

export default routes;

