import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularConditionComponentComponent } from './angular-condition-component/angular-condition-component.component';



@NgModule({
  declarations: [
    AngularConditionComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [AngularConditionComponentComponent]
})
export class AngularConditionsModule { }
