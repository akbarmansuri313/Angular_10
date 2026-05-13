import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileverificationListComponent } from './mobileverification-list.component';

describe('MobileverificationListComponent', () => {
  let component: MobileverificationListComponent;
  let fixture: ComponentFixture<MobileverificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileverificationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileverificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
