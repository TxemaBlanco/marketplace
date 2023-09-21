import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiclistviewComponent } from './views/comiclistview/comiclistview.component';
import { ComicdetailviewComponent } from './views/comicdetailview/comicdetailview.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'comic/:isbn', component: ComicdetailviewComponent },
  { path: '', component: LoginComponent},
  {path: 'home', component: ComiclistviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
