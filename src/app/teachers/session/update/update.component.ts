import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormsModule, NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';

import { MarksheetManagementService } from '../../../marksheet-management.service'
import { StudentModel } from '../../student.model'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id = '';
  sid = '';
  data: any[] = [];
    marks=0;
    dob='';
    name='';
    teacher='';

  errorMessage = "";
  constructor(private activatedRoute: ActivatedRoute, private resultManagement: MarksheetManagementService, private fb: FormBuilder, private router: Router) { }
  studentModelObj: StudentModel = new StudentModel();
   updateForm = FormsModule;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.sid = params['sid'];
      this.dob=params['d'];
      this.name=params['n'];
      this.marks=params['m'];
    });
  }


  logoutFunc(){
    //authGuard
    this.router.navigate(['']);
  }

  updateDetails(updateForm:NgForm) {

     this.studentModelObj.dob=updateForm.value['dob'];
     this.studentModelObj.name=updateForm.value['name'];
     this.studentModelObj.marks=updateForm.value['marks'];
     this.studentModelObj.rollno=this.sid;
     this.studentModelObj.teacher=this.id;
     console.log(this.studentModelObj);

     this.resultManagement.updateDetails(this.studentModelObj).subscribe(()=>{
      this.router.navigate(['/session'],{queryParams:{id:this.id}});
     });
  }


  changeFunc() {
    this.errorMessage = "";
  }
}
