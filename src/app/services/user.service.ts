import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Examination } from '../models/examinations.model';
import { User } from '../models/user.model';
import { UserDTO } from '../models/userDTO.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId:number=1070;
  baseURL='/api/User/';
  constructor(private _http: HttpClient){

  }
  getUser(newUser:UserDTO): Observable<User>{
      return this._http.post<any>('http://localhost:21757/api/User/login',newUser);
      
  }

  sendMail(email:string):Observable<any>{
    return this._http.put<any>('http://localhost:21757/api/User/sendCodeToUpdatePassword/',email);
  }
  updatePassword(code:string,newPass:string)
  {
    return this._http.get<any>('http://localhost:21757/api/User/updatePassword/{code}/{password}/{id}'+code+newPass+this.userId);
  }
}
