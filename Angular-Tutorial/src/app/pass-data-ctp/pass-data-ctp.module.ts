import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDataCtpComponentComponent } from './pass-data-ctp-component/pass-data-ctp-component.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    PassDataCtpComponentComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    PassDataCtpComponentComponent
  ]
})
export class PassDataCtpModule { }
