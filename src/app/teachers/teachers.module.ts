import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SessionComponent } from './session/session.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AdddetailsComponent } from './session/adddetails/adddetails.component';
import { UpdateComponent } from './session/update/update.component'
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SessionComponent,
    AdddetailsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TeachersModule { }
