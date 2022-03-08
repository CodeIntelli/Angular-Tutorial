import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBingingComponentComponent } from './property-binging-component.component';

describe('PropertyBingingComponentComponent', () => {
  let component: PropertyBingingComponentComponent;
  let fixture: ComponentFixture<PropertyBingingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBingingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBingingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
