import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBingingComponentComponent } from './property-binging-component/property-binging-component.component';



@NgModule({
  declarations: [
    PropertyBingingComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [PropertyBingingComponentComponent]
})
export class PropertyBindingModule { }
