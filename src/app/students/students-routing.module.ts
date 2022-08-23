import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetresultComponent} from './getresult/getresult.component'
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
