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

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import { AddPatientComponent } from './add-patient/add-patient.component';

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
  declarations: [LogInComponent, ResetPasswordComponent, AddUserComponent, MyTelInput,AddPatientComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CascadeSelectModule,
    MaterialModule
  ],
  exports: [
    LogInComponent,
    ResetPasswordComponent,
    AddUserComponent,
    AddPatientComponent
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ 
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }]
 


})
export class UserModule { }
