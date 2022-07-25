import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ByDoctorIdComponent } from './by-doctor-id/by-doctor-id.component';
import { ByLabIdComponent } from './by-lab-id/by-lab-id.component';
import { AddExanComponent } from './add-exan/add-exan.component';
import { MaterialModule } from '../material/material.module';
import { ByPatientIdComponent } from './by-patient-id/by-patient-id.component';
import { Routes } from '@angular/router';
import { AddExamLabComponent } from './add-exam-lab/add-exam-lab.component';
import { EditExamComponent } from './by-lab-id/editExam/editExam.component';
import { NgControl } from '@angular/forms';
import { PictureService } from 'src/app/services/picture.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  { path: 'exams', component: ByDoctorIdComponent },
  // {path:'add user',component:AddUser},
  // {path:'discussion groups',component:}

  { path: 'addExam', component: AddExanComponent },
];

@NgModule({
  declarations: [
    ByDoctorIdComponent,
    ByLabIdComponent,
    ByPatientIdComponent,
    AddExanComponent,
    AddExamLabComponent,
    EditExamComponent,
  ],
  imports: [MaterialModule],
  exports: [
    ByDoctorIdComponent,
    ByLabIdComponent,
    ByPatientIdComponent,
    AddExanComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PictureService],
})
export class ExamModule {}
