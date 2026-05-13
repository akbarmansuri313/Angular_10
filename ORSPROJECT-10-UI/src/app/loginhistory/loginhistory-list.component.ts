import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginhistory-list',
  templateUrl: './loginhistory-list.component.html',
  styleUrls: ['./loginhistory-list.component.css']
})
export class LoginhistoryListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.LOGINHISTORY, locator, route)
  }

}
