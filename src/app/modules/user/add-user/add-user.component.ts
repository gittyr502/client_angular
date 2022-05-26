import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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


export interface DialogData {
  animal: string;
  name: string;
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AlertTrueComponent } from './alert-true/alert-true.component';
import { AlertFalseComponent } from './alert-false/alert-false.component';



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
    idNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    selectedValue: new FormControl('', [Validators.required]),
    tel: new FormControl(new MyTel('', '', '')),
    userType: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  //  op: new FormControl('', Validators.required)
  hhh = false;
  options = [
   { id: 1, kind:"manager"},
   {id:2, kind:"doctor"},
   {id:3, kind:"lab"}, 
   {id:4, kind:"patient"}
  ];

  constructor(public dialogRef: MatDialogRef<AddUserComponent>, private _elementRef: ElementRef<HTMLElement>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  onChange = (_: any) => { };
  onTouched = () => { };

  onFocusOut(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }
  u: User;
  id: number;
  fName: string;
  lName: string;
  tel: string;
  email: string;
  pass: string;
  userType: number;
  
  addUser() {
    this.id = this.form.get('idNumber').value;
    this.fName = this.form.get('firstName').value;
    this.lName = this.form.get('lastName').value;
    this.tel = this.form.get('tel').value.area + '' + this.form.get('tel').value.exchange + '' + this.form.get('tel').value.subscriber;
    this.email = this.form.get('email').value;
    this.pass = this.form.get('password').value;
    this.userType = this.form.get('userType').value;

    this.u = new User(this.id, this.fName, this.lName, this.userType, this.email, this.tel, this.pass);
    this._userService.addUser(this.u).subscribe((t:any )=> {
      if (t) {
        this.hhh = true;
        this.openDialog(true);

      } else { this.hhh = true; this.openDialog(false); }
    });
  }

  success: boolean = true;
  failed: boolean = true;
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



