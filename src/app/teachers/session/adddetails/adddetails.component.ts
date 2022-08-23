import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarksheetManagementService } from '../../../marksheet-management.service'
import { StudentModel } from '../../student.model'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {

  addForm = new FormGroup({
    rollno:new FormControl(''),
    studentName:new FormControl(''),
    dob: new FormControl(''),
    marks: new FormControl('')
  });
 
  id='';
  data: any[] = [];
  errorMessage="";
  constructor(private activatedRoute: ActivatedRoute,private resultManagement: MarksheetManagementService, private router: Router) { }
  studentModelObj : StudentModel = new StudentModel();
  ngOnInit(): void {
    
      this.activatedRoute.queryParams.subscribe(params => {
        this.id=params['id'];
        
    });
  }

  addDetails(){
    this.studentModelObj.dob=this.addForm.value.dob;
    this.studentModelObj.marks=this.addForm.value.marks;
    this.studentModelObj.name=this.addForm.value.studentName;
    this.studentModelObj.rollno=this.addForm.value.rollno;
    this.studentModelObj.teacher=this.id;

    this.resultManagement.addStudentDetails(this.studentModelObj).subscribe((res)=>{
      if(res=="201"){
        this.router.navigate(['/session'],{queryParams:{id:this.id}})
      }
      else{
        this.errorMessage="Roll Number Already Exists, Kindly Update";
        this.router.navigate(['/session','add'],{queryParams:{id:this.id}});
      }
    })
  }
  
  logoutFunc(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  changeFunc(){
    this.errorMessage="";
  }

}
