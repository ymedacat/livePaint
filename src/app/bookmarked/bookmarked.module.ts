import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkedRoutingModule } from './bookmarked-routing.module';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { AngluarmaterialModule } from '../angluarmaterial.module';


@NgModule({
  imports: [
    CommonModule,
    BookmarkedRoutingModule,AngluarmaterialModule
  ],
  declarations: [BookmarkedComponent]
})
export class BookmarkedModule { }
