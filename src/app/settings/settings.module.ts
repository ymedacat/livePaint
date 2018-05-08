import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { AngluarmaterialModule } from '../angluarmaterial.module';


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    AngluarmaterialModule
  ],
  declarations: [
  SettingsComponent
  ]
})
export class SettingsModule { }
