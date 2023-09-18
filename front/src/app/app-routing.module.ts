import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiclistviewComponent } from './views/comiclistview/comiclistview.component';
import { ComicdetailviewComponent } from './views/comicdetailview/comicdetailview.component';

const routes: Routes = [
  { path: 'comic/:isbn', component: ComicdetailviewComponent },
  { path: '', component: ComiclistviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
