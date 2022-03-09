import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormGroup,FormControl,FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { ByPatientIdComponent } from '../exam/by-patient-id/by-patient-id.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {  MatTabsModule} from '@angular/material/tabs';
<<<<<<< HEAD
import { AddUserComponent } from 'src/app/modules/user/add-user/add-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
=======

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddUserComponent } from './add-user/add-user.component';

>>>>>>> f96076c706cf31b9b54d6295757a73040f693993




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
  declarations: [LogInComponent,ResetPasswordComponent,AddUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule
  ],
  exports: [
    LogInComponent,
    ResetPasswordComponent,
    AddUserComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  

})
export class UserModule { }
