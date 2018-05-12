import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AngluarmaterialModule } from '../angluarmaterial.module';
import {SharedModule,FooterComponent,HeaderComponent} from '../shared';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    AngluarmaterialModule
  ],
  declarations: [
    LoginComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LoginModule { }