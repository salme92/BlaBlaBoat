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

  

}
