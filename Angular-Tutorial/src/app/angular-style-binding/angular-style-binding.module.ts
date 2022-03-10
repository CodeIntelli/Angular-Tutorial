import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularStyleBindingComponentComponent } from './angular-style-binding-component/angular-style-binding-component.component';



@NgModule({
  declarations: [
    AngularStyleBindingComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [AngularStyleBindingComponentComponent]
})
export class AngularStyleBindingModule { }
