import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from "../http-service.service";
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-marksheetmerit-list',
  templateUrl: './marksheetmerit-list.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class MarksheetmeritListComponent extends BaseCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.Marksheet, locator, route);

  }
}