import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { MakeTripService} from '../../services/make-trip.service';

@Component({
  selector: 'app-whereismytrip',
  templateUrl: './whereismytrip.component.html',
  styleUrls: ['./whereismytrip.component.css']
})


export class WhereismytripComponent implements OnInit {

  trips:any;
  latitud:Number;
  longitude:Number;

  constructor(private pS:MakeTripService){}

ngOnInit(){
  this.pS.getMyTrips().subscribe(trips => this.trips = trips);
}

  
  
 // google maps zoom level
 zoom: number = 8;
  
 // initial center position for the map
 lat: number = 40.4167;
 lng: number =  -3.70325;

 markers: marker[] = [
   {
     lat: 40.4167,
     lng:  -3.70325,
     label: 'A',
     draggable: true
   },
   {
     lat: 51.373858,
     lng: 7.215982,
     label: 'B',
     draggable: false
   }
 ]
}

// just an interface for type safety.
interface marker {
 lat: number;
 lng: number;
 label?: string;
 draggable: boolean;
}

