import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicTableComponent } from './components/comic-table/comic-table.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeloginviewComponent } from './views/homeloginview/homeloginview.component';
import { RegisterAComponent } from './components/register-a/register-a.component';
import { ShopingCartClientComponent } from './components/shoping-cart-client/shoping-cart-client.component';


const routes: Routes = [
  { path: 'comic/:isbn', component:  ComicDetailComponent },
  { path: 'comicList', component: HomeuserviewComponent},
  { path: '', component:  HomeloginviewComponent},
  {path: 'register', component: RegisterAComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: ShopingCartClientComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
