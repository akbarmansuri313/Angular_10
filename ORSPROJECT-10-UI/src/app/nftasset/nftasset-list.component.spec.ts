import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftassetListComponent } from './nftasset-list.component';

describe('NftassetListComponent', () => {
  let component: NftassetListComponent;
  let fixture: ComponentFixture<NftassetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftassetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftassetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
