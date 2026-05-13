import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-qrscanner-list',
  templateUrl: './qrscanner-list.component.html',
  styleUrls: ['./qrscanner-list.component.css']
})
export class QrscannerListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.QRSCANNER, locator, route)
  }

}
