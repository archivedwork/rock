import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', redirectTo: ''},
  {path: 'realestate/list', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
