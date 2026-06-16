import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServermonitorListComponent } from './servermonitor-list.component';

describe('ServermonitorListComponent', () => {
  let component: ServermonitorListComponent;
  let fixture: ComponentFixture<ServermonitorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServermonitorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServermonitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
