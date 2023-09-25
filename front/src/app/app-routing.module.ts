import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicTableComponent } from './components/comic-table/comic-table.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeadminviewComponent } from './views/homeadminview/homeadminview.component';
import { CartComponent } from './examples/cart/cart.component';
import { RegisterComponent } from './examples/register/register.component';

const routes: Routes = [
  { path: 'comic/:isbn', component:  ComicDetailComponent },
  { path: 'comicList', component: HomeuserviewComponent},
  { path: '', component:  HomeadminviewComponent},
  { path: 'cart', component:  CartComponent},
  { path: 'register', component:  RegisterComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
