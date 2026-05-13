import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allow-list',
  templateUrl: './allow-list.component.html',
  styleUrls: ['./allow-list.component.css']
})
export class AllowListComponent extends BaseListCtl {

   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
  
      super(locator.endpoints.ALLOW, locator, route);
    }

}
