import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicTableComponent } from './components/user/comic-table/comic-table.component';
import { ComicDetailComponent } from './components/user/comic-detail/comic-detail.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeloginviewComponent } from './views/homeloginview/homeloginview.component';
import { RegisterAComponent } from './components/user/register-a/register-a.component';
import { ShopingCartClientComponent } from './components/user/shoping-cart-client/shoping-cart-client.component';
import { AdminloginviewComponent } from './views/adminloginview/adminloginview.component';
import { EditComicComponent } from './components/admin/edit-comic/edit-comic.component';

const routes: Routes = [
  { path: 'comic/:isbn', component:  ComicDetailComponent },
  { path: 'comicList', component: HomeuserviewComponent},
  { path: '', component:  HomeloginviewComponent},
  {path: 'register', component: RegisterAComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: ShopingCartClientComponent},
  { path: 'editar/:isbn', component: EditComicComponent },
  { path: 'admin', component: AdminloginviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
