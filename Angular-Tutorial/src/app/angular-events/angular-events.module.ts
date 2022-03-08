import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEventsComponentComponent } from './angular-events-component/angular-events-component.component';



@NgModule({
  declarations: [
    AngularEventsComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    AngularEventsComponentComponent
  ]
})
export class AngularEventsModule { }
