import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintnowComponent } from './paintnow/paintnow.component';

const routes: Routes = [

  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'meetfriend', loadChildren: 'app/meetfriend/meetfriend.module#MeetfriendModule' },
  { path: 'paintnow', loadChildren: 'app/paintnow/paintnow.module#PaintnowModule' },
  { path: 'bookmarked', loadChildren: 'app/bookmarked/bookmarked.module#BookmarkedModule' },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: '', component: PaintnowComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintnowRoutingModule { }
