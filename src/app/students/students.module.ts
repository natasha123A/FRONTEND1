import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { GetresultComponent } from './getresult/getresult.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DisplayresultsComponent } from './displayresults/displayresults.component';
@NgModule({
  declarations: [
    GetresultComponent,
    DisplayresultsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class StudentsModule { }
