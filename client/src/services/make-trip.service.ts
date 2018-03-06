import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/trip`)
      .map((res) => res.json());
  }
}