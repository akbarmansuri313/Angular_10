import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.PETADOPTION, locator, route)
  }

}
