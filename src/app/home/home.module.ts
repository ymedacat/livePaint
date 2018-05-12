import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngluarmaterialModule } from '../angluarmaterial.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngluarmaterialModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }