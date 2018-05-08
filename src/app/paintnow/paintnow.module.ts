import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintnowComponent } from './paintnow/paintnow.component';
import { PaintnowRoutingModule } from './paintnow-routing.module';
import { AngluarmaterialModule } from '../angluarmaterial.module';


@NgModule({
  imports: [
    CommonModule,
    PaintnowRoutingModule,
    AngluarmaterialModule
  ],
  declarations: [
  	PaintnowComponent
  ]
})
export class PaintnowModule { }
