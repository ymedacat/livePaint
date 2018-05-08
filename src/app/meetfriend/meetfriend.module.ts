import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetfriendRoutingModule } from './meetfriend-routing.module';
import { MeetfriendComponent } from './meetfriend/meetfriend.component';
import { AngluarmaterialModule } from '../angluarmaterial.module';


@NgModule({
  imports: [
    CommonModule,
    MeetfriendRoutingModule,
    AngluarmaterialModule
  ],
  declarations: [
  MeetfriendComponent
 ]
})
export class MeetfriendModule { }
