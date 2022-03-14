import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingComponentComponent } from './angular-routing-component.component';

describe('AngularRoutingComponentComponent', () => {
  let component: AngularRoutingComponentComponent;
  let fixture: ComponentFixture<AngularRoutingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRoutingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
