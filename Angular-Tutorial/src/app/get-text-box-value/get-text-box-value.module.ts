import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTextBoxValueComponentComponent } from './get-text-box-value-component/get-text-box-value-component.component';



@NgModule({
  declarations: [
    GetTextBoxValueComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [GetTextBoxValueComponentComponent]
})
export class GetTextBoxValueModule { }
