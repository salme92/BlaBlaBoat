import { Component, OnInit } from '@angular/core';
import cities from "../../cities"
import { MakeTripService } from '../../services/make-trip.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  id: any
  trips:Array<any>;
  users: any;
  cities = cities;
  status:boolean = false;
  newCitie: Object = {}


  constructor(private pS: MakeTripService) { }

  ngOnInit() {
    this.pS.getMyTrips().subscribe(trips => this.trips = trips);
  }

  recogerInput() {
    var origin = $('#pac-input').val();
    var destination = $('#pac-input2').val();
    console.log
    console.log(origin)
    console.log(destination)

  }


}
