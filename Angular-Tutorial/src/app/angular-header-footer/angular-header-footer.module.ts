import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHeaderFooterComponentComponent } from './angular-header-footer-component/angular-header-footer-component.component';
import { HeaderComponent } from './angular-header-footer-component/header/header.component';
import { FooterComponent } from './angular-header-footer-component/footer/footer.component';



@NgModule({
  declarations: [
    AngularHeaderFooterComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    AngularHeaderFooterComponentComponent
  ]
})
export class AngularHeaderFooterModule { }
