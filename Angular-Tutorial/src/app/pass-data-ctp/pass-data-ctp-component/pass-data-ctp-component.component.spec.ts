import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataCtpComponentComponent } from './pass-data-ctp-component.component';

describe('PassDataCtpComponentComponent', () => {
  let component: PassDataCtpComponentComponent;
  let fixture: ComponentFixture<PassDataCtpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDataCtpComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassDataCtpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
