import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSimpleFormsComponentComponent } from './angular-simple-forms-component.component';

describe('AngularSimpleFormsComponentComponent', () => {
  let component: AngularSimpleFormsComponentComponent;
  let fixture: ComponentFixture<AngularSimpleFormsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSimpleFormsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSimpleFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
