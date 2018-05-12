import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AngluarmaterialModule } from '../angluarmaterial.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngluarmaterialModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }