import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import {Demand} from '../Modules/Demand';

const BACKEND_URL = environment.apiUrl + '/demand';

@Injectable({ providedIn: 'root' })
export class DemandService {
  private Demands: Demand[] = [];
  private demandUpdated = new Subject<Demand[]>();

  constructor(private http: HttpClient, private router: Router) {}


  getDemandUpdateListener() {
    return this.demandUpdated.asObservable();
  }

  addDemand(
    category: string,
    name: string,
    description : string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    decoration: string,
    music: string,
    location: string,
    musictype: string
  ) {
    const Data = {
      category,
      name,
      description,
      firstname,
      lastname,
      email,
      phone,
      decoration,
      music,
      location,
      musictype
    };
    this.http
      .post<{ message: string; demand: Demand }>(
        BACKEND_URL,
        Data
      )
      .subscribe(responseData => {
        this.router.navigate(['/success']);
      });
  }

  getDemands() {
    this.http
      .get<{ message: string; demands: any}>(
        BACKEND_URL
      )
      .subscribe(data => {
        console.log(data);
        this.Demands = data.demands;
        this.demandUpdated.next([...this.Demands]);
      });
  }

  getDemand(id: string) {
    return this.http.get<Demand>(BACKEND_URL +'/'+ id);
  }

}
