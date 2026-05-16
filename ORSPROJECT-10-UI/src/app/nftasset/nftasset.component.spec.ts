import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftassetComponent } from './nftasset.component';

describe('NftassetComponent', () => {
  let component: NftassetComponent;
  let fixture: ComponentFixture<NftassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
