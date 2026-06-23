import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.component.html',
  styleUrls: ['./coworking.component.css']
})
export class CoworkingComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.COWORKING, locator, route)
  }


}
