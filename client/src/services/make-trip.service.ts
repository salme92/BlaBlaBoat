import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { RegistrationComponent } from '../app/registration/registration.component'


@Injectable()
export class MakeTripService {
  options: object = {withCredentials: true}
  BASE_URL: string = 'http://localhost:3000';
  origin:String;
  destination:String;
  date: Date;

  constructor(private http: Http) {}

  handleError(e){
    console.log(e);
    return Observable.throw(e.json().message);
  }

  getMyTrips():Observable<any>{
    console.log("Veo mis Viajes");
    return this.http.get(`${this.BASE_URL}/api/myTrips`)
    .map((res)=>res.json())
    .catch(this.handleError);
  }

  createTrip(origin, dest, date):Observable<any>{
    console.log('entro en el servicio')
    console.log(origin, dest, date)
    return this.http.post(`${this.BASE_URL}/newBoats`, {origin, dest, date}, this.options)
    .map((res)=>res.json())
    .catch(this.handleError);
  }


}

