import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataPtcComponentComponent } from './pass-data-ptc-component.component';

describe('PassDataPtcComponentComponent', () => {
  let component: PassDataPtcComponentComponent;
  let fixture: ComponentFixture<PassDataPtcComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDataPtcComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassDataPtcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
