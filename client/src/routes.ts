// app.module.ts
import { Routes } from "@angular/router";
import { MyHomeComponent } from "./app/my-home/my-home.component";
import { RegistrationComponent } from "./app/registration/registration.component";
import { WhereismytripComponent} from "../src/app/whereismytrip/whereismytrip.component"
import { MyTripsComponent } from "./app/my-trips/my-trips.component";
import { UserListComponent } from "./app/user-list/user-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'whereismytrip', component: WhereismytripComponent},
  { path: 'showReservation/:id', component: MyTripsComponent},
  { path: 'userList', component: UserListComponent }
];

export default routes;

