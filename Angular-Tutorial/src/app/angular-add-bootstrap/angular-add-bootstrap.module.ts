import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularAddBootstrapComponentComponent } from './angular-add-bootstrap-component/angular-add-bootstrap-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AngularAddBootstrapComponentComponent
  ],
  imports: [
    CommonModule, NgbModule
  ], exports: [AngularAddBootstrapComponentComponent], bootstrap: [AngularAddBootstrapComponentComponent]
})
export class AngularAddBootstrapModule { }
