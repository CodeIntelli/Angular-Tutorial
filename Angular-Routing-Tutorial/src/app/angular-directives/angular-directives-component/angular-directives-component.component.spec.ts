import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectivesComponentComponent } from './angular-directives-component.component';

describe('AngularDirectivesComponentComponent', () => {
  let component: AngularDirectivesComponentComponent;
  let fixture: ComponentFixture<AngularDirectivesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDirectivesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDirectivesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
