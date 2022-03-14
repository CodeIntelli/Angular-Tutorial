import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDirectivesComponentComponent } from './angular-directives-component/angular-directives-component.component';



@NgModule({
  declarations: [
    AngularDirectivesComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    AngularDirectivesComponentComponent
  ]
})
export class AngularDirectivesModule { }
