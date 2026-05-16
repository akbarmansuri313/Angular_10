import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nftasset-list',
  templateUrl: './nftasset-list.component.html',
  styleUrls: ['./nftasset-list.component.css']
})
export class NftassetListComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.NFTASSET, locator, route)
  }


}
