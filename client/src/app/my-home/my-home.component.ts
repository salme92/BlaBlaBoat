import { Component, OnInit } from '@angular/core';
import cities from "../../cities"

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  cities = cities;
  status:boolean = false;
  newCitie: Object = {}


  constructor() { }

  ngOnInit() {
    this.cities = cities;
  }

  recogerInput() {
    var origin = $('#pac-input').val();
    var destination = $('#pac-input2').val();
    console.log
    console.log(origin)
    console.log(destination)

  }

  

}
