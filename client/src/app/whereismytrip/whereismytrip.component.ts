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
  user_id:any;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  lat: Number;
  lng: Number;


@ViewChild("search")
  public searchElementRef: ElementRef;



  constructor(public maketrip:MakeTripService,private route: ActivatedRoute, private router:Router,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.route.params.subscribe(body=>this.user_id = body.id)})
      console.log(this.user_id)
    this.zoom = 4;
    // this.latitude = 39.8282;
    // this.longitude = -98.5795;
    

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.lat=this.latitude;
          this.lng=this.longitude;
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }






}
}