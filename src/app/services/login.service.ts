import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examination } from '../models/examinations.model';
import { User } from '../models/user.model';
import { UserDTO } from '../models/userDTO.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseURL='/api/User/';
  constructor(private _http: HttpClient){

  }
  getUser(newUser:UserDTO): Observable<User>{
      return this._http.post<any>('http://localhost:21757/api/User/login',newUser);
  }

}
