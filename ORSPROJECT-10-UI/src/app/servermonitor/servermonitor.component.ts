import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servermonitor',
  templateUrl: './servermonitor.component.html',
  styleUrls: ['./servermonitor.component.css']
})
export class ServermonitorComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.SERVER, locator, route)
  }


}
