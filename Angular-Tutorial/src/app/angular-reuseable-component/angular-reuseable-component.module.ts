import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularReuseableComponent } from './angular-reuseable/angular-reuseable.component';
import { UserComponentComponent } from './user-component/user-component.component';



@NgModule({
  declarations: [
    AngularReuseableComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [AngularReuseableComponent]
})
export class AngularReuseableComponentModule { }
