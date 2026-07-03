import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.css']
})
export class RecommendationListComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.RECOMMENDATION, locator, route)
  }

}
