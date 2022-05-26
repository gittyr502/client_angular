import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { ByPatientIdComponent } from '../exam/by-patient-id/by-patient-id.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MyTelInput } from "./add-user/example-tel-input";
import { CascadeSelectModule } from 'primeng/cascadeselect';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AlertTrueComponent } from './add-user/alert-true/alert-true.component';
import { AlertFalseComponent } from './add-user/alert-false/alert-false.component';

import {MatDatepickerModule} from '@angular/material/datepicker';



// const user_routes: Routes = [
//   {
//     path: 'login',
//     loadChildren: () => import('M:/angular/microscopic-picture/src/app/modules/user/user.module').then(m => m.UserModule)
//   },
//   {path: '**',
//     loadChildren: () => import('M:/angular/microscopic-picture/src/app/modules/user/user.module').then(m => m.UserModule)
//   },
//   {
//     path: 'patient',
//     loadChildren: () => import('M:/angular/microscopic-picture/src/app/modules/exam/exam.module').then(m => m.ExamModule)
//  }
// ]



@NgModule({
  declarations: [LogInComponent, ResetPasswordComponent, AddUserComponent, MyTelInput, AlertTrueComponent, AlertFalseComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    CascadeSelectModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    LogInComponent,
    ResetPasswordComponent,
    AddUserComponent,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],



})
export class UserModule { }
