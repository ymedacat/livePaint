import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintnowComponent } from './paintnow/paintnow.component';

const routes: Routes = [
  { path: '', component: PaintnowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintnowRoutingModule { }
