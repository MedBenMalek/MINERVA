import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemandService} from '../demand.service';
import {Demand} from '../../Modules/Demand';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-show-demands',
  templateUrl: './show-demands.component.html',
  styleUrls: ['./show-demands.component.css']
})
export class ShowDemandsComponent implements OnInit, OnDestroy {
  private demandSub: Subscription;

  constructor(private ds: DemandService) { }

  demands: object;
  categorie: string = 'general';
  ngOnInit() {
    this.ds.getDemands();
    this.demandSub = this.ds.getDemandUpdateListener().subscribe((data: Demand[]) => this.demands = data);
    console.log(this.demands);
  }

  ngOnDestroy() {
    this.demandSub.unsubscribe();
  }

}
