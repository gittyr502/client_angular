import { NgClass } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { patientDTO } from 'src/app/models/patientDTO.models';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  temp: any;
  users: string[] = [];
  selected: any;
  value: any;
  hmo: string[] = ["mehuchedet", "leumit", "klalit", "makabi"];
  selectedHMO:any;

  form: FormGroup = new FormGroup({
    user: new FormControl(),
    idNumber: new FormControl(),
    medicalInformation: new FormControl(),
    birthDate: new FormControl(),
    HMOId: new FormControl()
  });
  isSubmitted = false;

  constructor(private _userService: UserService, private fb: FormBuilder) { }

  addPatient = this.fb.group({
    user1: ['', [Validators.required]],
    idNumber: ['', Validators.required],
    medicalInformation: [],
    birthDate: ['', Validators.required],
    HMO: ['', Validators.required]
  })



  user1 = this.addPatient.get('user1');


  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data => {
      this.temp = data;
      this.temp.forEach((element: any) => {
        if (element.userKindId == 4) {
          this.users.push(element.firstName + " " + element.lastName);
        }
      });

    })
  }

  p:patientDTO;
  id:string;
  userId:number;
  birthDate:Date;
  fName:string;
  lName:string;
  email:string;
  password:string;
  add_patient(): void {

  }

  changeUser(u: any) {
    this.user1?.setValue(u.target.value, {
      onlySelf: true,
    });
  }

  get userName() {
    return this.addPatient.get('user1');
  }

  onSubmit(): void {
    console.log(this.addPatient);
    this.isSubmitted = true;
    if (!this.addPatient.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.addPatient.value));
    }
  }
}
