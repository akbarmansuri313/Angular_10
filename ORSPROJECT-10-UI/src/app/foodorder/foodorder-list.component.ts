import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodorder-list',
  templateUrl: './foodorder-list.component.html',
  styleUrls: ['./foodorder-list.component.css']
})
export class FoodorderListComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.FOODORDER, locator, route)
  }


}
