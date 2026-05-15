import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccontListComponent } from './accont-list.component';

describe('AccontListComponent', () => {
  let component: AccontListComponent;
  let fixture: ComponentFixture<AccontListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccontListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccontListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
