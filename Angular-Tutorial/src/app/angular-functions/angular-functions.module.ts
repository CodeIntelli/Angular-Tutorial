import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFuncComponentComponent } from './angular-func-component/angular-func-component.component';



@NgModule({
  declarations: [
    AngularFuncComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AngularFuncComponentComponent
  ]
})
export class AngularFunctionsModule { }
