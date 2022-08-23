import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarksheetManagementService } from '../../marksheet-management.service'
import { TeachersModel } from '../teacher.model';
import { StudentModel } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  id = '';
  data: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private resultManagement: MarksheetManagementService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];

    });
    this.resultManagement.getStudentdetails({ 'userID': this.id }).subscribe((res) => {
      this.data = res;
    });
  }

logoutFunc(){
  //authGuard
  localStorage.removeItem('token');
  this.router.navigate(['']);
}
  deleteDetails(sid: string, id: string) {
    this.resultManagement.deleteDetails(id, sid).subscribe(() => {

      {
        this.resultManagement.getStudentdetails({ 'userID': this.id }).subscribe((res) => {
          this.data = res;
        });
        this.router.navigateByUrl("/session?id=" + this.id);
      }
    });
  }

}

