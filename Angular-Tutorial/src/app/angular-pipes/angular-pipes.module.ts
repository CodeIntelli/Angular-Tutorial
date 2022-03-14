import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPipesComponentComponent } from './angular-pipes-component/angular-pipes-component.component';



@NgModule({
  declarations: [
    AngularPipesComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [AngularPipesComponentComponent]
})
export class AngularPipesModule { }
