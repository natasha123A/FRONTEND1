import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './teachers/login/login.component'
import { SignupComponent } from './teachers/signup/signup.component'
import {SessionComponent} from './teachers/session/session.component'
import {GetresultComponent} from './students/getresult/getresult.component'
import {AdddetailsComponent} from './teachers/session/adddetails/adddetails.component'
import {UpdateComponent} from './teachers/session/update/update.component'
import { HomeComponent } from './home/home.component'
import {DisplayresultsComponent} from './students/displayresults/displayresults.component'
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [{
  path: 'teachers',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ]
},
{
  path:'students',
  children:[
    {path:'getresult',component:GetresultComponent}
  ]
},
{
  path:'session',canActivate:[AuthGuard],
  children:[
    {path:'',component:SessionComponent},
    {path:'add',component:AdddetailsComponent},
    {path:'update',component:UpdateComponent}
  ]
},
{path:'', redirectTo:'/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path:'getresult',component:DisplayresultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
