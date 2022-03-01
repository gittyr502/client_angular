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
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    //RouterModule.forChild(routs)
  ],
  exports: [
    LogInComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

  

})
export class UserModule { }
