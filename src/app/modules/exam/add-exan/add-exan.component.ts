
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { FileUpLoadService } from './file-up-load.service';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';

import {  UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/userDTO.models';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-exan',
  templateUrl: './add-exan.component.html',
  styleUrls: ['./add-exan.component.css'],
  providers:[Cloudinary]
})
export class AddExanComponent implements OnInit {
  @Input()
  responses: Array<any>;

  private hasBaseDropZoneOver: boolean = false;
  private uploader: FileUploader;
  private title: string;
  // constructor(private cloudinary: Cloudinary, private zone: NgZone, private http: HttpClient, private fileUpLoadService: FileUpLoadService) {
  //   this.responses = [];
  //   this.title = '';
  // }

  // ngOnInit(): void {

//   // Create the file uploader, wire it to upload to your account
//   const uploaderOptions: FileUploaderOptions = {
//     // url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
//     url:`https://api.cloudinary.com/v1_1/CLOUD_NAME/upload`,
//     // Upload files automatically upon addition to upload queue
//     autoUpload: true,
//     // Use xhrTransport in favor of iframeTransport
//     isHTML5: true,
//     // Calculate progress independently for each uploaded file
//     removeAfterUpload: true,
//     // XHR request headers
//     headers: [
//       {
//         name: 'X-Requested-With',
//         value: 'XMLHttpRequest'
//       }
//     ]
//   };

//   this.uploader = new FileUploader(uploaderOptions);

//   this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
//     // Add Cloudinary unsigned upload preset to the upload form
//     // form.append('upload_preset', this.cloudinary.config().upload_preset);
//     form.append('upload_preset', 'PRESET_NAME');

//     // Add file to upload
//     form.append('file', fileItem);

//     // Use default "withCredentials" value for CORS requests
//     fileItem.withCredentials = false;
//     return { fileItem, form };
//   };
// }


//   fileOverBase(e: any): void {
//     this.hasBaseDropZoneOver = e;
//   }
// }







  hide = true;
  
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(),
  //   password: new FormControl(),
  // });

  userDTO!: UserDTO;
  patientIds!:string[];
  selectedPatient!:string;

  constructor(private _loginService: UserService, private router: Router,private _patientService:PatientService) { }

  ngOnInit(): void {
    this.userDTO = new UserDTO();
    this._patientService.getAllPatientsId().subscribe(data=>{
      if (data) {
        this.patientIds=data;
      }
    })
  }

  addExamForm:FormGroup=new FormGroup({
    patientId:new FormControl('',Validators.required),
  })





  LogIn(id: string, password: string) {
    this.userDTO.id = id;
    this.userDTO.password = password;
    this._loginService.getUser(this.userDTO).subscribe(data => {
      if (data) {
        this._loginService.userId=data.id;
        console.log("hello" + " " + data.firstName + " " + data.lastName);
        if (data.userKindId == 4) {
          this.router.navigate(['/patient', { id: data.id }]);
        }
        if (data.userKindId == 1) {
          this.router.navigate(['/manager', { id: data.id }]);
        }
        if (data.userKindId == 2) {
          this.router.navigate(['/doctor', { id: data.id }]);
        }
        if (data.userKindId == 3) {
          this.router.navigate(['/lab', { id: data.id }]);
        }

      }
      else { console.log("no such user"); }
    });
  }
}



