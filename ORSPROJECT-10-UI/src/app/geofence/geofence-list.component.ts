import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geofence-list',
  templateUrl: './geofence-list.component.html',
  styleUrls: ['./geofence-list.component.css']
})
export class GeofenceListComponent extends BaseListCtl {


   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    
        super(locator.endpoints.GEOFENCE, locator, route);
      }

}
