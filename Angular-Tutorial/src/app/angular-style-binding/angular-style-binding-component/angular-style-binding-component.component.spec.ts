import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStyleBindingComponentComponent } from './angular-style-binding-component.component';

describe('AngularStyleBindingComponentComponent', () => {
  let component: AngularStyleBindingComponentComponent;
  let fixture: ComponentFixture<AngularStyleBindingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularStyleBindingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStyleBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
