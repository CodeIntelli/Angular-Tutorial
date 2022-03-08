import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFuncComponentComponent } from './angular-func-component.component';

describe('AngularFuncComponentComponent', () => {
  let component: AngularFuncComponentComponent;
  let fixture: ComponentFixture<AngularFuncComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFuncComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFuncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
