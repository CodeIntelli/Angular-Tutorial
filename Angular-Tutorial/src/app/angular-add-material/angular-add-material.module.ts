import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularAddMaterialComponentComponent } from './angular-add-material-component/angular-add-material-component.component';



@NgModule({
  declarations: [
    AngularAddMaterialComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [AngularAddMaterialComponentComponent]
})
export class AngularAddMaterialModule { }
