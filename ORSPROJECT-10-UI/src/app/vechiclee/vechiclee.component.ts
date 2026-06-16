import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vechiclee',
  templateUrl: './vechiclee.component.html',
  styleUrls: ['./vechiclee.component.css']
})
export class VechicleeComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.VEHICLEE, locator, route)
  }

}
