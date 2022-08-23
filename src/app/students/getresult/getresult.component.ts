import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, FormBuilder,FormsModule, NgForm } from '@angular/forms';
import { MarksheetManagementService } from '../../marksheet-management.service'
@Component({
  selector: 'app-getresult',
  templateUrl: './getresult.component.html',
  styleUrls: ['./getresult.component.css']
})
export class GetresultComponent implements OnInit {
  constructor(private router:Router,private resultManagement : MarksheetManagementService) { }
  
  ngOnInit(): void {
  }

  getResult(getResultForm:NgForm) {
     this.router.navigate(['/getresult'],{queryParams:{id:getResultForm.value['rollno'],dob:getResultForm.value['dob']}});
 }
  studentModelObj(studentModelObj: any) {
    throw new Error('Method not implemented.');
  }

  

  homeFunc(){
    this.router.navigate(['']);
  }


}
