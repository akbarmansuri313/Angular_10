import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cloudstorage',
  templateUrl: './cloudstorage.component.html',
  styleUrls: ['./cloudstorage.component.css']
})
export class CloudstorageComponent extends BaseCtl {

   constructor(public locator : ServiceLocatorService, route : ActivatedRoute){
  
      super(locator.endpoints.CLOUD,locator,route)
    }

}
