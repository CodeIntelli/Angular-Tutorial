import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHeaderFooterComponentComponent } from './angular-header-footer-component.component';

describe('AngularHeaderFooterComponentComponent', () => {
  let component: AngularHeaderFooterComponentComponent;
  let fixture: ComponentFixture<AngularHeaderFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHeaderFooterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHeaderFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
