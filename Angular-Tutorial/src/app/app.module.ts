import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';

import { AngularFunctionsModule } from './angular-functions/angular-functions.module'
import { AngularEventsModule } from './angular-events/angular-events.module';

import { GetTextBoxValueModule } from './get-text-box-value/get-text-box-value.module'

import { PropertyBindingModule } from './property-binding/property-binding.module'

import { AngularConditionsModule } from './angular-conditions/angular-conditions.module'
import { AngularSwitchCaseModule } from './angular-switch-case/angular-switch-case.module';
import { AngularLoopsModule } from './angular-loops/angular-loops.module';
import { AngularSimpleFormsModule } from './angular-simple-forms/angular-simple-forms.module';
import { AngularHeaderFooterModule } from './angular-header-footer/angular-header-footer.module';
import { AngularStyleBindingModule } from './angular-style-binding/angular-style-binding.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularAddBootstrapModule } from './angular-add-bootstrap/angular-add-bootstrap.module';
import { FormsModule, ReactiveFormsModule }
  from '@angular/forms';

import { BrowserAnimationsModule }
  from '@angular/platform-browser/animations';
import { AngularAddMaterialModule } from './angular-add-material/angular-add-material.module';
import { MatButtonModule } from '@angular/material/button'
import { PassDataPtcModule } from './pass-data-ptc/pass-data-ptc.module';
import { AngularReuseableComponentModule } from './angular-reuseable-component/angular-reuseable-component.module';
import { PassDataCtpModule } from './pass-data-ctp/pass-data-ctp.module';
import { AngularPipesModule } from './angular-pipes/angular-pipes.module';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, MatButtonModule,
    // import all other modules here
    UsersModule, AngularFunctionsModule, AngularEventsModule, GetTextBoxValueModule, PropertyBindingModule, AngularConditionsModule, AngularSwitchCaseModule, AngularLoopsModule, AngularSimpleFormsModule, AngularHeaderFooterModule, AngularStyleBindingModule, NgbModule, AngularAddBootstrapModule, FormsModule,
    ReactiveFormsModule,
    AngularAddMaterialModule, PassDataPtcModule, AngularReuseableComponentModule, PassDataCtpModule, AngularPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
