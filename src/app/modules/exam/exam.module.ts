import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { ByPatientIdComponent } from './by-patient-id/by-patient-id.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';

// const userRoutes: Routes = [
//   {
//     path: 'byPatientId',
//     component: ByPatientIdComponent
//   },
//   {
//     path: '**',
//     component: ByPatientIdComponent
//   },
// ]



@NgModule({
  declarations: [
    ByPatientIdComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(userRoutes),
    MatFormFieldModule,
    MatTableModule,
    FormsModule,

    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    ByPatientIdComponent
  ],
  providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
 

export class ExamModule { }
