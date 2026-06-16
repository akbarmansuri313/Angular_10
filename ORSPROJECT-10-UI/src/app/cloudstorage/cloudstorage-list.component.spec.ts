import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudstorageListComponent } from './cloudstorage-list.component';

describe('CloudstorageListComponent', () => {
  let component: CloudstorageListComponent;
  let fixture: ComponentFixture<CloudstorageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudstorageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudstorageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
