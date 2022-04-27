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
  userId: number = 1076;
  baseURL = 'api/User/';
  constructor(private _http: HttpClient) {

  }
  getUser(newUser: UserDTO): Observable<User> {
    return this._http.post<any>(this.baseURL + 'login', newUser);
  }

  getAllUsers(): Observable<any> {
    debugger;
    return this._http.get<any>(this.baseURL)
  }

  sendMail(email: string): Observable<any> {
    return this._http.get<any>(this.baseURL + 'sendCodeToUpdatePassword/' + email)
  }
  updatePassword(code: string, newPass: string) {
    return this._http.get<any>(this.baseURL + 'updatePassword/' + code + newPass + this.userId);
  }

  addUser(user: User): Observable<number> {
    return this._http.post<any>(this.baseURL,user);
    
  }
}
