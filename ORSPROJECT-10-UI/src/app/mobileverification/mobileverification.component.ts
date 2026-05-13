import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobileverification',
  templateUrl: './mobileverification.component.html',
  styleUrls: ['./mobileverification.component.css']
})
export class MobileverificationComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.MOBILE, locator, route)
  }

}
