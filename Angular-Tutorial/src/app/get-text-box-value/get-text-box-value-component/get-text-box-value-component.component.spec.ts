import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTextBoxValueComponentComponent } from './get-text-box-value-component.component';

describe('GetTextBoxValueComponentComponent', () => {
  let component: GetTextBoxValueComponentComponent;
  let fixture: ComponentFixture<GetTextBoxValueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTextBoxValueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTextBoxValueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
