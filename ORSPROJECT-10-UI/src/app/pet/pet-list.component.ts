import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.PETADOPTION, locator, route)
  }


}
