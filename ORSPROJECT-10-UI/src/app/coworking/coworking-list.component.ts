import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coworking-list',
  templateUrl: './coworking-list.component.html',
  styleUrls: ['./coworking-list.component.css']
})
export class CoworkingListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.COWORKING, locator, route)
  }

}
