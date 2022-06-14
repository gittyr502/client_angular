
import { Component, OnInit, Input, NgZone, Inject } from '@angular/core';
import { FileUpLoadService } from './file-up-load.service';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';

import {  UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/userDTO.models';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Examination } from 'src/app/models/examinations.model';
import { ExamService } from 'src/app/services/exam.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../user/add-user/add-user.component';
import { User } from 'src/app/models/user.model';
import { MatFormFieldControl } from '@angular/material/form-field';
import { AlertTrueComponent } from '../../material/alert-true/alert-true.component';
import { AlertFalseComponent } from '../../material/alert-false/alert-false.component';

@Component({
  selector: 'app-add-exan',
  templateUrl: './add-exan.component.html',
  styleUrls: ['./add-exan.component.css'],
 
})
export class AddExanComponent implements OnInit {
  // @Input()
  // responses: Array<any>;

  // private hasBaseDropZoneOver: boolean = false;
  // private uploader: FileUploader;
  // private title: string;
  // addExamForm:FormGroup=new FormGroup({
  //   patientId:new FormControl('',Validators.required),
  // })
  hide = true;
  userDTO!: UserDTO;
  patients:User[]=[];
  selectedPatient!:number;
  doctorComments!:string;
  date!:Date;
  exam!:Examination;
  constructor( private router: Router,private _patientService:PatientService,private _examService:ExamService, private _userService:UserService, public dialogRef: MatDialogRef<AddExanComponent>,
     private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.userDTO = new UserDTO();
      this._userService.getAllUsers().subscribe((data: User[])=>{
      debugger;
      data.forEach((e)=>{
        if(e.userKindId==4)
        this.patients.push(e);
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  sendExam():void{
    this.date=new Date();
    this.exam=new Examination(0,this.selectedPatient,this.date,this._userService.userId,false,'',false,'','',0,this.doctorComments);
    this._examService.addExam(this.exam).subscribe(()=>{
    this.openDialog(true);
    console.log("success");
    this.dialogRef.close();
   }
    );
    

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

  
  

  
}



