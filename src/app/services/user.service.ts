import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Examination } from '../models/examinations.model';
import { User } from '../models/user.model';
import { UserDTO } from '../models/userDTO.models';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId: number = 0;
  baseURL = 'api/User/';
  constructor(private _http: HttpClient,private _patientService:PatientService) {}

  getUser(newUser: UserDTO): Observable<User> {
    return this._http.post<any>(this.baseURL + 'login', newUser);
  }

  getAllUsers(): Observable<any> {
    return this._http.get<any>(this.baseURL);
  }

  sendMail(email: string): Observable<any> {
    return this._http.get<any>(
      this.baseURL + 'sendCodeToUpdatePassword/' + email
    );
  }

  updatePassword(code: string, newPass: string) {
    return this._http.get<any>(
      this.baseURL + 'updatePassword/' + code + newPass + this.userId
    );
  }

  // convertUserToPatient(user){

  // }

  addUser(user: User): Observable<number> {
    return this._http.post<any>(this.baseURL, user);
  }

  deleteUser(user: User): Observable<any> {
    // return this._http.post<any>(this.baseURL,user);
    return this._http.post<any>(this.baseURL + 'DeleteUser/' + user.id, '');
  }


}
