import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAddBootstrapComponentComponent } from './angular-add-bootstrap-component.component';

describe('AngularAddBootstrapComponentComponent', () => {
  let component: AngularAddBootstrapComponentComponent;
  let fixture: ComponentFixture<AngularAddBootstrapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAddBootstrapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAddBootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
