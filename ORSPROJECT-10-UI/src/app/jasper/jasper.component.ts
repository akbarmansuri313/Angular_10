import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jasper',
  templateUrl: './jasper.component.html',
  styleUrls: ['./jasper.component.css']
})
export class JasperComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute, private httpclient: HttpClient) {
    super(locator.endpoints.JASPER, locator, route);

  }

  override ngOnInit(): void {
    this.generateReport();
  }

  generateReport() {

    this.httpclient.get("http://localhost:8080/Jasper/report", {
      responseType: 'blob',
    }).subscribe((response: Blob) => {

      const fileURL = URL.createObjectURL(response);
      
      window.open(fileURL);

      this.locator.router.navigate(['/marksheetList'])

    }, 
  );

  }
}


