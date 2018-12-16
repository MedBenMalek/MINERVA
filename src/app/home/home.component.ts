import { Component, OnInit } from '@angular/core';
import {EventService} from '../event/event.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event[];
  userIsAuthenticated = false;
  user: object;
  private eventsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(public eventService: EventService, private authService: AuthService) { }

  ngOnInit() {
    this.eventService.getEvents();
    this.user = this.authService.getUser();
    this.eventsSub = this.eventService.getEventUpdateListener().subscribe(
      (data: Event[]) => {
        this.events = data;
      }
    );
  }

}
