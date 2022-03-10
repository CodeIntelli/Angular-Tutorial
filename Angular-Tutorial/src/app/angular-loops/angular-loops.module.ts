import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLoopsComponentComponent } from './angular-loops-component/angular-loops-component.component';



@NgModule({
  declarations: [
    AngularLoopsComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    AngularLoopsComponentComponent
  ]
})
export class AngularLoopsModule { }
  