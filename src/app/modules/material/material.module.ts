import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

import { AlertFalseComponent } from './alert-false/alert-false.component';
import { AlertTrueComponent } from './alert-true/alert-true.component';

@NgModule({
  declarations: [
  AlertFalseComponent,
  AlertTrueComponent
  
 
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatCheckboxModule ,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    FormsModule ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatCheckboxModule ,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    FormsModule,
    AlertFalseComponent,
    AlertTrueComponent
  ]
  // providers: [{ 
  //   provide: ng MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } 
  // }],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
