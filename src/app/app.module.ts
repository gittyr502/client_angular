import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { UserService } from './services/user.service';
import { ExamModule } from './modules/exam/exam.module';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ByPatientIdComponent } from './modules/exam/by-patient-id/by-patient-id.component';
import { ByDoctorIdComponent } from './modules/exam/by-doctor-id/by-doctor-id.component';
import { ByLabIdComponent } from './modules/exam/by-lab-id/by-lab-id.component';
import { UserModule } from './modules/user/user.module';
import { ResetPasswordComponent } from './modules/user/reset-password/reset-password.component';
import { AddUserComponent } from './modules/user/add-user/add-user.component';
import { AddPatientComponent } from './modules/user/add-patient/add-patient.component';
import { LogInComponent } from './modules/user/log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
// import { AddExanComponent } from './modules/exam/add-exan/add-exan.component';
import { AddExanComponent } from './modules/exam/add-exan copy/add-exan.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { AddExam2Component } from './modules/exam/add-exan/add-exam2/add-exam2.component';
import { ManagerComponent } from './manager/manager.component';
import { MatDialogModule } from '@angular/material/dialog';


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
  { path: 'addExam', component: AddExanComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'manager', component: ManagerComponent }
  // {path:'manager/:id',component:ByDoctorIdComponent}
  //loadChildren: () => import('./modules/exam/exam.module').then(m => m.ExamModule)

];
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    AddExam2Component,
    ManagerComponent,
    AddExanComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    CloudinaryModule,
    MatDialogModule,
    // ExamModule,
    // UserModule,
    RouterModule.forRoot(routes)
  ],


  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    UserService],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
