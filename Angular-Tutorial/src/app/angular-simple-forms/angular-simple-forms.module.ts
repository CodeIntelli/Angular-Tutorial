import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSimpleFormsComponentComponent } from './angular-simple-forms-component/angular-simple-forms-component.component';

import { FormsModule } from '@angular/forms'
import { from } from 'rxjs'

@NgModule({
  declarations: [
    AngularSimpleFormsComponentComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], exports: [AngularSimpleFormsComponentComponent]
})
export class AngularSimpleFormsModule { }
