import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import {Event} from '../Modules/Event';

const BACKEND_URL = environment.apiUrl + '/event';

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: Event[] = [];
  private eventUpdated = new Subject<Event[]>();

  constructor(private http: HttpClient, private router: Router) {}


  getEventUpdateListener() {
    return this.eventUpdated.asObservable();
  }

  addEvent(
    category: string,
    name: string,
    image: File,
    dateDebut: string,
    dateFin: string,
    price: string,
    maxParticapates : string,
    location : string,
    description : string,
  ) {
    const Data = new FormData();
    Data.append('category', category);
    Data.append('name', name);
    Data.append('description', description);
    Data.append('image', image, name);
    this.http
      .post<{ message: string; event: Event }>(
        BACKEND_URL,
        Data
      )
      .subscribe(responseData => {
        this.router.navigate(['/success']);
      });
  }

  getEvents() {
    this.http
      .get<{ message: string; events: any}>(
        BACKEND_URL
      )
      .subscribe(data => {
        this.events = data.events;
        this.eventUpdated.next([...this.events]);
      });
  }

}
