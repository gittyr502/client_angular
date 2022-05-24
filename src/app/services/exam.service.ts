import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examination } from '../models/examinations.model';
import { User } from '../models/user.model';
import { UserDTO } from '../models/userDTO.models';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  baseURL='/api/Exam/';

  constructor(private _http: HttpClient) { } 
  getExamById(id:number): Observable<Examination[]>{
      return this._http.get<any>(this.baseURL+'GetByPatientIdChecked/'+id);
  }
  getExamByDoctorId(id:number):Observable<Examination[]>{
    return this._http.get<any>(this.baseURL+'getByDoctorId/'+id);
  }

  getExamsLab(id:number):Observable<Examination[]>{
    return this._http.get<any>(this.baseURL+'GetAllExam');
  }

  getDoctorNameByDoctorId(id:number):Observable<string>{
    return this._http.get<any>('http://localhost:21757/api/exam/'+'getDoctorNameById/'+id);
    
  }

  addExam(exam:Examination):Observable<any>{
    return this._http.post<any>(this.baseURL,exam);
    // return this._http.post<any>('/api?data='+exam,null);
  }

  // addExam(exam:Examination):Observable<any>{
  //   // return this._http.post<any>(this.baseURL+exam);
  // }

  }



 



