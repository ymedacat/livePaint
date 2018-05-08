import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';


const routes: Routes = [
  { path: '', component: BookmarkedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkedRoutingModule { }
