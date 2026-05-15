import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accont-list',
  templateUrl: './accont-list.component.html',
  styleUrls: ['./accont-list.component.css']
})
export class AccontListComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.ACCOUNT, locator, route)
  }

}
