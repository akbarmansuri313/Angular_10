import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nftasset',
  templateUrl: './nftasset.component.html',
  styleUrls: ['./nftasset.component.css']
})
export class NftassetComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.NFTASSET, locator, route)
  }


}
