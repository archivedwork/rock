import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', redirectTo: ''},
  {path: 'realestate/list', component: ListingComponent},
  {path: 'property/datasheet/1', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
