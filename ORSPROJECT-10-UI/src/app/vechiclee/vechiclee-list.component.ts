import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vechiclee-list',
  templateUrl: './vechiclee-list.component.html',
  styleUrls: ['./vechiclee-list.component.css']
})
export class VechicleeListComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.VEHICLEE, locator, route)
  }

}
