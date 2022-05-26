import { NgModule } from '@angular/core';

import { ByDoctorIdComponent } from './by-doctor-id/by-doctor-id.component';
import { ByLabIdComponent } from './by-lab-id/by-lab-id.component';
import { AddExanComponent } from './add-exan/add-exan.component';
import { MaterialModule } from '../material/material.module';
import { ByPatientIdComponent } from './by-patient-id/by-patient-id.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    
    path: "", pathMatch:"full", redirectTo:"user"
  },
  {path:'exams',component:ByDoctorIdComponent},
  // {path:'add user',component:AddUser},
  // {path:'discussion groups',component:}

{path:'addExam',component:AddExanComponent}
];



@NgModule({
  declarations: [
  ByDoctorIdComponent,
  ByLabIdComponent,
  ByPatientIdComponent,
  AddExanComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
   
  ]

})
export class ExamModule { }
