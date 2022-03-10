import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSwitchCaseComponentComponent } from './angular-switch-case-component/angular-switch-case-component.component';



@NgModule({
  declarations: [
    AngularSwitchCaseComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [AngularSwitchCaseComponentComponent]
})
export class AngularSwitchCaseModule { }
