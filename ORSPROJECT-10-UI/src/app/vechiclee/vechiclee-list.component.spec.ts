import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleeListComponent } from './vechiclee-list.component';

describe('VechicleeListComponent', () => {
  let component: VechicleeListComponent;
  let fixture: ComponentFixture<VechicleeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechicleeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechicleeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
