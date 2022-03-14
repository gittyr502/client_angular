import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MyTel } from './example-tel-input';
import {
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
} from '@angular/forms';





export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // form2:FormGroup = new FormGroup({

  // selectedValue = };
  matcher = new MyErrorStateMatcher();
  form: FormGroup = new FormGroup({
    idNumber:new FormControl('idNumber', [Validators.required]),
    email:new FormControl('email', [Validators.required, Validators.email]),
    firstName:new FormControl('firstName', [Validators.required]),
    lastName:new FormControl('lastName', [Validators.required]),
    selectedValue:new FormControl('user kind',[Validators.required]),
    tel: new FormControl(new MyTel('', '', '')),
   
  });
  //  op: new FormControl('', Validators.required)

  options: string[] = [
    "manager", "doctor", "lab", "patient"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}



