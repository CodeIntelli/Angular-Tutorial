import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAddMaterialComponentComponent } from './angular-add-material-component.component';

describe('AngularAddMaterialComponentComponent', () => {
  let component: AngularAddMaterialComponentComponent;
  let fixture: ComponentFixture<AngularAddMaterialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAddMaterialComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAddMaterialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
