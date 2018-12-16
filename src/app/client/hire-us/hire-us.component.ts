import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-us',
  templateUrl: './hire-us.component.html',
  styleUrls: ['./hire-us.component.css']
})
export class HireUsComponent implements OnInit {

  constructor() { }

  type: string;

  ngOnInit() {
  }

  callType(value: string) {
    this.type = value;
  }
}
