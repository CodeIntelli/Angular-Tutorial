import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularAddMaterialComponentComponent } from './angular-add-material-component/angular-add-material-component.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule }
  from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AngularAddMaterialComponentComponent
  ],
  imports: [
    CommonModule, MatButtonModule, BrowserAnimationsModule, MatSliderModule
  ], exports: [AngularAddMaterialComponentComponent]
})
export class AngularAddMaterialModule { }
