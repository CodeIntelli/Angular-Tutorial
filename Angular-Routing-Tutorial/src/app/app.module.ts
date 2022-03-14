import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './angular-routing/user-component/user-component.component';
import { AdminComponentComponent } from './angular-routing/admin-component/admin-component.component';
import { AngularRoutingComponentComponent } from './angular-routing/angular-routing-component/angular-routing-component.component';
import { AboutComponentComponent } from './angular-routing/about-component/about-component.component';
import { PageNotFoundComponentComponent } from './angular-routing/page-not-found-component/page-not-found-component.component';
import { AngularDirectivesModule } from './angular-directives/angular-directives.module';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    AdminComponentComponent,
    AngularRoutingComponentComponent,
    AboutComponentComponent,
    PageNotFoundComponentComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
