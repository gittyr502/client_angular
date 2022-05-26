import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ByPatientIdComponent } from './modules/exam/by-patient-id/by-patient-id.component';
import { ByDoctorIdComponent } from './modules/exam/by-doctor-id/by-doctor-id.component';

import { AppRoutingModule } from './app-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { ExamModule } from './modules/exam/exam.module';
import { UserModule } from './modules/user/user.module';
import { LogInComponent } from './modules/user/log-in/log-in.component';
import { ByLabIdComponent } from './modules/exam/by-lab-id/by-lab-id.component';
import { ResetPasswordComponent } from './modules/user/reset-password/reset-password.component';
import { AddUserComponent } from './modules/user/add-user/add-user.component';
import { AddExanComponent } from './modules/exam/add-exan/add-exan.component';
import { AddPatientComponent } from './modules/user/add-patient/add-patient.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "user" },
  { path: 'user', component: LogInComponent },
  { path: 'patient', component: ByPatientIdComponent },
  { path: 'patient/:id', component: ByPatientIdComponent },
  { path: 'doctor', component: ByDoctorIdComponent },
  { path: 'doctor/:id', component: ByDoctorIdComponent },
  { path: 'lab', component: ByLabIdComponent },
  { path: 'pass', component: ResetPasswordComponent },
  { path: 'add user', component: AddUserComponent },
  { path: 'upload', component: AddExanComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'manager', component: ManagerComponent },
  {path:'addExam',component:AddExanComponent}
  // {path:'manager/:id',component:ByDoctorIdComponent}
  //loadChildren: () => import('./modules/exam/exam.module').then(m => m.ExamModule)

];
@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
   ExamModule,
   UserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],


  providers: [
    
    UserService],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
