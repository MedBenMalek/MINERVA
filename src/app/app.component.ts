import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(public router: Router,private authService: AuthService) { }
  islogin = false;

  ngOnInit() {
    this.authService.autoAuthUser();
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.islogin = e.url === '/login' || e.url === '/sign-up' || e.url ==='/success';
      }
    });
    console.log(this.islogin);
  }
}

