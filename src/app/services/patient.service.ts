import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { patientDTO } from '../models/patientDTO.models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseURL = '/api/Patient/';
  constructor(private _http: HttpClient) {
  }
  getPatientsByUserId(userId: number): Observable<patientDTO[]> {

    return this._http.get<any>(this.baseURL + userId);
  }

  getAllPatientsId(): Observable<string[]> {
    return this._http.get<any>(this.baseURL+"GetAllPatientsIds");
  }
  addPatient(p:Patient ){
    return this._http.post<Patient>(this.baseURL,p);
  }
}
