import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetfriendComponent } from './meetfriend/meetfriend.component';

const routes: Routes = [
  { path: '', component: MeetfriendComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetfriendRoutingModule { }
