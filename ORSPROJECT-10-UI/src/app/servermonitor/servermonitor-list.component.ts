import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servermonitor-list',
  templateUrl: './servermonitor-list.component.html',
  styleUrls: ['./servermonitor-list.component.css']
})
export class ServermonitorListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.SERVER, locator, route)
  }




}
