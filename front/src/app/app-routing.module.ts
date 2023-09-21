import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiclistviewComponent } from './views/comiclistview/comiclistview.component';
import { ComicdetailviewComponent } from './views/comicdetailview/comicdetailview.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [
  { path: 'comic/:isbn', component: ComicdetailviewComponent },
  { path: 'comicList', component: ComiclistviewComponent},
  { path: '', component:  LoginViewComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
