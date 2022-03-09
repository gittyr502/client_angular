import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './modules/user/log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {  UserService } from './services/user.service';
import { ExamModule } from './modules/exam/exam.module';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ByPatientIdComponent } from './modules/exam/by-patient-id/by-patient-id.component';
import { ByDoctorIdComponent } from './modules/exam/by-doctor-id/by-doctor-id.component';
import { ByLabIdComponent } from './modules/exam/by-lab-id/by-lab-id.component';
import { UserModule } from './modules/user/user.module';
import { ResetPasswordComponent } from './modules/user/reset-password/reset-password.component';
import { AddUserComponent } from './modules/user/add-user/add-user.component';

// import {Ng}

const routes: Routes = [
  {
    path: "", pathMatch:"full", redirectTo:"user"
  },{
    path: 'user',
    component:LogInComponent
    // component:AddUserComponent

  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  // },
  {path:'patient',component:ByPatientIdComponent},
  {path:'patient/:id',component:ByPatientIdComponent},
  {path:'doctor',component:ByDoctorIdComponent},
  {path:'doctor/:id',component:ByDoctorIdComponent},
  {path:'lab',component:ByLabIdComponent},
  {path:'pass',component:ResetPasswordComponent},
  {path:'add',component:AddUserComponent}
  // {path:'manager/:id',component:ByDoctorIdComponent}
  //loadChildren: () => import('./modules/exam/exam.module').then(m => m.ExamModule)

];
@NgModule({
  declarations: [
    AppComponent,
    
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule, 
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    MatStepperModule,
    MatInputModule,
    AppRoutingModule,
    ExamModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  

  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    UserService  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
  exports:[RouterModule]

})
export class AppModule { }
