import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarksheetManagementService } from '../../marksheet-management.service'
import { TeachersModel } from '../teacher.model';
import { StudentModel } from '../student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = "";
  errorMessage = "";
  teacherModelObj: TeachersModel = new TeachersModel();
  loginForm = new FormGroup({
    teacherID: new FormControl(''),
    passwd: new FormControl('')
  });

  studentModelObj: StudentModel = new StudentModel();
  constructor(private resultManagement: MarksheetManagementService, private router: Router) { }

  ngOnInit(): void {
  }

  changeFunc() {
    this.errorMessage = "";
  }

  homeFunc(){
    this.router.navigate(['']);
  }

  userAuthenticate() {
    this.teacherModelObj.id = this.loginForm.value.teacherID;
    this.teacherModelObj.password = this.loginForm.value.passwd;

    this.resultManagement.authenticateUser(this.teacherModelObj).subscribe((res) => {
      if (res == "-1") {
        this.errorMessage = "Invalid Credentials";
        this.router.navigate(['/teachers', 'login'])
      }
      else{
        localStorage.setItem('token',"ejbhdgadskjfeai3rwaoij;eafidsf9e;arjfkdsjdjasdlkfjasajlkdsf");
        this.router.navigate(
          ['/session'],
          { queryParams: { id: res }}
          );
      }
    });
  }

}
