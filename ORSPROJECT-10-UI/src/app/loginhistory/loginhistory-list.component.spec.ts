import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhistoryListComponent } from './loginhistory-list.component';

describe('LoginhistoryListComponent', () => {
  let component: LoginhistoryListComponent;
  let fixture: ComponentFixture<LoginhistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginhistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginhistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
