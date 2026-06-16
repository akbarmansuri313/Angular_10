import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleeComponent } from './vechiclee.component';

describe('VechicleeComponent', () => {
  let component: VechicleeComponent;
  let fixture: ComponentFixture<VechicleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechicleeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechicleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
