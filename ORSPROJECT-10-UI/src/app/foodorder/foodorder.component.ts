import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodorder',
  templateUrl: './foodorder.component.html',
  styleUrls: ['./foodorder.component.css']
})
export class FoodorderComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.FOODORDER, locator, route)
  }

}
