import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrscannerListComponent } from './qrscanner-list.component';

describe('QrscannerListComponent', () => {
  let component: QrscannerListComponent;
  let fixture: ComponentFixture<QrscannerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrscannerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrscannerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
