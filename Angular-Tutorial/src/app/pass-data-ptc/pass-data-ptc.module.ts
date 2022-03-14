import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDataPtcComponentComponent } from './pass-data-ptc-component/pass-data-ptc-component.component';
import { UserComponentComponent } from './user-component/user-component.component';



@NgModule({
  declarations: [
    PassDataPtcComponentComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule
  ], exports: [PassDataPtcComponentComponent]
})
export class PassDataPtcModule { }
