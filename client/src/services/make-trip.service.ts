import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { RegistrationComponent } from '../app/registration/registration.component';
import { Router } from "@angular/router";
import { environment } from '../environments/environment';
const BASEURL: string = environment.BASE_URL;



@Injectable()
export class MakeTripService {
  options: object = { withCredentials: true }
  BASE_URL: string = 'http://localhost:3000';
  origin: String;
  destination: String;
  date: Date;

  constructor(private http: Http, private router: Router) { }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  getMyTrips(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/showReservation`, this.options)
      .map((res) => {
        return res.json()
      })
      .catch(this.handleError);
  }

  getOneTrip(id): Observable<any> {
    return this.http.get(`${this.BASE_URL}/showReservation/${id}`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  createTrip(origin, dest, date): Observable<any> {
    console.log('entro en el servicio')
    console.log(origin, dest, date)
    return this.http.post(`${this.BASE_URL}/newBoats`, { origin, dest, date }, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }






}

