import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, FormBuilder,FormsModule, NgForm } from '@angular/forms';
import { MarksheetManagementService } from '../../marksheet-management.service'
@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.css']
})
export class DisplayresultsComponent implements OnInit {
data:any[]=[];
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private resultManagement:MarksheetManagementService) { }
id='';dob='';
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.dob = params['dob'];
    });

    this.resultManagement.getDetails(this.id,this.dob).subscribe((res) => {
      this.data = res;
      console.log(res);
      console.log(this.data);
    });
  }
  homeFunc(){
    this.router.navigate(['']);
  }
}
