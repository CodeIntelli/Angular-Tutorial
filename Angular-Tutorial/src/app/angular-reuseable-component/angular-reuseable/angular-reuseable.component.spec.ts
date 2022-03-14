import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReuseableComponent } from './angular-reuseable.component';

describe('AngularReuseableComponent', () => {
  let component: AngularReuseableComponent;
  let fixture: ComponentFixture<AngularReuseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularReuseableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReuseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
