import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whereismytrip',
  templateUrl: './whereismytrip.component.html',
  styleUrls: ['./whereismytrip.component.css']
})
export class WhereismytripComponent implements OnInit {

  origin = this.origin;
  destination = this.destination;

  constructor() { }

  ngOnInit() {

  }

  
}
