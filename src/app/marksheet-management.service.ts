import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { TeachersModel } from './teachers/teacher.model';
import { StudentModel } from './teachers/student.model';
@Injectable({
  providedIn: 'root'
})
export class MarksheetManagementService {
  
  constructor(private http:HttpClient) { }
  private url = "http://localhost:3001";
   registerUser(userData:TeachersModel){
   return this.http.post<TeachersModel>(this.url+"/register",userData).pipe(map((res:any)=>{
     return res;
   }))
  }

  authenticateUser(userData:TeachersModel){
    return this.http.post<TeachersModel>(this.url+"/userlogin",userData).pipe(map((res:any)=>{
      return res;
    }));
  }

  getStudentdetails(userID:any){
    return this.http.post<any>(this.url+'/getalldata',userID).pipe(map((res:any)=>{
      return res;
    }));
  }

  addStudentDetails(userData:StudentModel){
    return this.http.post<any>(this.url+'/add',userData).pipe(map((res:any)=>{
      return res;
    }));
  }

  updateDetails(userData:StudentModel) {
    return this.http.post<any>(this.url+'/updatedetails',userData).pipe(map((res:any)=>{
      return res;
    })) ;
  }

  deleteDetails(id:string,sid:string){
    return this.http.delete(this.url+'/deletedetails?id='+id+'&sid='+sid).pipe(map((res:any)=>{
      return res;
    })) ;
  }

  getDetails(id:string,dob:string){
    return this.http.post<any>(this.url+'/getmarks',{id:id,dob:dob}).pipe(map((res:any)=>{
      return res;
    })) ;
  }
}
