import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './angular-routing/about-component/about-component.component';
import { AdminComponentComponent } from './angular-routing/admin-component/admin-component.component';
import { PageNotFoundComponentComponent } from './angular-routing/page-not-found-component/page-not-found-component.component';
import { UserComponentComponent } from './angular-routing/user-component/user-component.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponentComponent
  },
  {
    path: 'admin',
    component: AdminComponentComponent
  },
  {
    path: 'about',
    component: AboutComponentComponent
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
