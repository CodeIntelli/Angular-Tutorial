import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEventsComponentComponent } from './angular-events-component.component';

describe('AngularEventsComponentComponent', () => {
  let component: AngularEventsComponentComponent;
  let fixture: ComponentFixture<AngularEventsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularEventsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEventsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
