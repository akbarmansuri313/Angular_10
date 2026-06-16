import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServermonitorComponent } from './servermonitor.component';

describe('ServermonitorComponent', () => {
  let component: ServermonitorComponent;
  let fixture: ComponentFixture<ServermonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServermonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServermonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
