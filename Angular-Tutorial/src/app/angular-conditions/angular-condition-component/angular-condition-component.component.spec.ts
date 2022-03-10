import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConditionComponentComponent } from './angular-condition-component.component';

describe('AngularConditionComponentComponent', () => {
  let component: AngularConditionComponentComponent;
  let fixture: ComponentFixture<AngularConditionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularConditionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConditionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
