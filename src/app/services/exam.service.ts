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
      return this._http.get<any>('http://localhost:21757/api/Exam/{id}'+id);
  }
  getExamByDoctorId(id:number){
    return this._http.get<any>('http://localhost:21757//api/Exam/getByDoctorId/{DoctorId}'+id);
  }
  }



 



