import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodorderListComponent } from './foodorder-list.component';

describe('FoodorderListComponent', () => {
  let component: FoodorderListComponent;
  let fixture: ComponentFixture<FoodorderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodorderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
