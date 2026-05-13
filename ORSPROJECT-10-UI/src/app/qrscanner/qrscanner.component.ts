import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    
        super(locator.endpoints.QRSCANNER, locator, route)
      }

}
