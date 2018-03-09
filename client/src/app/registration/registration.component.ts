import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { ObjectUnsubscribedError } from 'rxjs';
import { MakeTripService } from '../../services/make-trip.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [MakeTripService]
})
export class RegistrationComponent implements OnInit {
  origin: String;
  destination: String;
  dateReservation: String;
  trip: any;
  myTrip


  constructor(public pS: MakeTripService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  

  createTrip() {
    console.log('entro en el componente')
    console.log(this.origin, this.destination, this.dateReservation)

    const origin = this.origin
    const dest = this.destination
    const date = this.dateReservation
    console.log(dest);
    this.pS.createTrip(origin, dest, date)
      .subscribe((trip) => { console.log(trip) },
    );
  }


}
