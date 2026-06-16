import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiclerental-list',
  templateUrl: './vehiclerental-list.component.html',
  styleUrls: ['./vehiclerental-list.component.css']
})
export class VehiclerentalListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.VEHICLE, locator, route)
  }

}
