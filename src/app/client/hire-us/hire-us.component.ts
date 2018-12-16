import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DemandService} from '../demand.service';

@Component({
  selector: 'app-hire-us',
  templateUrl: './hire-us.component.html',
  styleUrls: ['./hire-us.component.css']
})
export class HireUsComponent implements OnInit {

  constructor(public ds: DemandService) { }

  type: string;

  ngOnInit() {
  }

  callType(value: string) {
    this.type = value;
  }

  onSubmiHire(Form: NgForm) {
    if(Form.invalid) {
      return;
    }
    this.ds.addDemand(
      Form.value.category,
      Form.value.name,
      Form.value.description,
      Form.value.firstname,
      Form.value.lastname,
      Form.value.email,
      Form.value.phone,
      Form.value.decoration,
      Form.value.music,
      Form.value.location,
      Form.value.musictype
    );

  }
}
