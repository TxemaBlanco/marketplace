import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicTableComponent } from './components/comic-table/comic-table.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'comic/:isbn', component:  ComicDetailComponent },
  { path: 'comicList', component: ComicTableComponent},
  { path: '', component:  LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
