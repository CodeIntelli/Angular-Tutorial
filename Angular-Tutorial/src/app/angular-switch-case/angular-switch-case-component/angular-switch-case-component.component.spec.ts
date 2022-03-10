import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSwitchCaseComponentComponent } from './angular-switch-case-component.component';

describe('AngularSwitchCaseComponentComponent', () => {
  let component: AngularSwitchCaseComponentComponent;
  let fixture: ComponentFixture<AngularSwitchCaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSwitchCaseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSwitchCaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
