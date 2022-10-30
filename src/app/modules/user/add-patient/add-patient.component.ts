import { NgClass } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { patientDTO } from 'src/app/models/patientDTO.models';
import { User } from 'src/app/models/user.model';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { AlertFalseComponent } from '../../material/alert-false/alert-false.component';
import { AlertTrueComponent } from '../../material/alert-true/alert-true.component';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  users: User[] = [];
  selected: any;
  value: any;
  selectedHMO:any;

  form: FormGroup = new FormGroup({
    user: new FormControl(),
    birthDate: new FormControl(),
    HMOId: new FormControl()
  });
  p1:Patient;
 hmos = [
    { id: 1, hmo:"מאוחדת"},
    {id:2, hmo:"לאומית"},
    {id:3, hmo:"מכבי"},
    {id:4, hmo:"כללית"}
   ];
  constructor(private _userService: UserService, private fb: FormBuilder, private router: Router, private dialog:MatDialog,private _patientService:PatientService, public dialogRef:MatDialogRef<AddPatientComponent>) { }

  addPatient = this.fb.group({
    user1: ['', [Validators.required]],
    idNumber: ['', Validators.required],
    medicalInformation: [],
    birthDate: ['', Validators.required],
    HMO: ['', Validators.required]
  })


  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data:User[]) => {
      data.forEach((e)=>{
         if(e.userKindId==4)
         this.users.push(e)
       });



    })
  }



  add_patient(): void {
  this.p1=new Patient(0,this.form.get('user').value,this.form.get('birthDate').value,this.form.get('HMOId').value)
  this._patientService.addPatient(this.p1).subscribe(()=>
      {
      console.log("succes");
      this.openDialog(true);
      }
      )
    }




  addUser(){
    const dialogRef = this.dialog.open(AddUserComponent);

  }

  openDialog(status: boolean): void {
    if (status == true) {
      const dialogRef = this.dialog.open(AlertTrueComponent, {
        width: '30%',
        height: '20%',
        data: {},
      });
    }
    else {
      const dialogRef = this.dialog.open(AlertFalseComponent, {
        width: '30%',
        height: '20%',
        data: {}
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

