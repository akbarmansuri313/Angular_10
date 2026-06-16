import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclerentalListComponent } from './vehiclerental-list.component';

describe('VehiclerentalListComponent', () => {
  let component: VehiclerentalListComponent;
  let fixture: ComponentFixture<VehiclerentalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclerentalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclerentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
