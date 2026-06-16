import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiclerental',
  templateUrl: './vehiclerental.component.html',
  styleUrls: ['./vehiclerental.component.css']
})
export class VehiclerentalComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.VEHICLE, locator, route)
  }

}
