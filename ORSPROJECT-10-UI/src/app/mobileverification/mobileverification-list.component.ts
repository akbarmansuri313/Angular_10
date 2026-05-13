import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobileverification-list',
  templateUrl: './mobileverification-list.component.html',
  styleUrls: ['./mobileverification-list.component.css']
})
export class MobileverificationListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.MOBILE, locator, route)
  }

}
