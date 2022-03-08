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

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import all other modules here
    UsersModule, AngularFunctionsModule, AngularEventsModule, GetTextBoxValueModule, PropertyBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
