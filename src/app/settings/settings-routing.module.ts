import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SettingsComponent, pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'meetfriend', loadChildren: 'app/meetfriend/meetfriend.module#MeetfriendModule' },
  { path: 'paintnow', loadChildren: 'app/paintnow/paintnow.module#PaintnowModule' },
  { path: 'bookmarked', loadChildren: 'app/bookmarked/bookmarked.module#BookmarkedModule' },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }