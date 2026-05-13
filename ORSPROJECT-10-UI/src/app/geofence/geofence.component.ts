import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.css']
})
export class GeofenceComponent extends BaseCtl {

  constructor(public locator : ServiceLocatorService, route : ActivatedRoute){
  
      super(locator.endpoints.GEOFENCE,locator,route)
    }

}
