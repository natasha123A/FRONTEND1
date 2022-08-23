import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {MarksheetManagementService} from '../../marksheet-management.service'
import { TeachersModel } from '../teacher.model';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message ="";
  errorMessage="";
  signupForm = new FormGroup({
    teacherName:new FormControl(''),
    mail:new FormControl(''),
    teacherID: new FormControl(''),
    passwd: new FormControl('')
  });

  constructor(private resultManagement:MarksheetManagementService,private router:Router) { }
  
  ngOnInit(): void { }

  teacherModelObj : TeachersModel = new TeachersModel();
  changeFunc(){
    this.errorMessage="";
}
homeFunc(){
  this.router.navigate(['']);
}
  userDetail(){
    this.teacherModelObj.email=this.signupForm.value.mail;
    this.teacherModelObj.id=this.signupForm.value.teacherID;
    this.teacherModelObj.name=this.signupForm.value.teacherName;
    this.teacherModelObj.password=this.signupForm.value.passwd;

     this.resultManagement.registerUser(this.teacherModelObj).subscribe( (res) => {
     this.message = res;
     if(this.message=="201"){
       this.router.navigate(['/teachers','login']);
     }
     else{
       this.errorMessage="Teacher ID Allready Exists";
       this.router.navigate(['/teachers','signup']);
     }
   });
  }
}
