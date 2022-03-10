import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLoopsComponentComponent } from './angular-loops-component.component';

describe('AngularLoopsComponentComponent', () => {
  let component: AngularLoopsComponentComponent;
  let fixture: ComponentFixture<AngularLoopsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLoopsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLoopsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
