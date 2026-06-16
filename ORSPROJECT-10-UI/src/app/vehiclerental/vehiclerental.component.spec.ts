import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclerentalComponent } from './vehiclerental.component';

describe('VehiclerentalComponent', () => {
  let component: VehiclerentalComponent;
  let fixture: ComponentFixture<VehiclerentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclerentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclerentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
