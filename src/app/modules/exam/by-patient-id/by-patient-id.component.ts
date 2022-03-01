import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Examination } from 'src/app/models/examinations.model';
import { Patient } from 'src/app/models/patient.model';
import { patientDTO } from 'src/app/models/patientDTO.models';
import { ExamService } from 'src/app/services/exam.service';
import { PatientService } from 'src/app/services/patient.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-by-patient-id',
  templateUrl: './by-patient-id.component.html',
  styleUrls: ['./by-patient-id.component.css']
})
export class ByPatientIdComponent implements OnInit, AfterViewInit{

 
  constructor(private examService:ExamService,private _acr: ActivatedRoute,private patientService:PatientService ) { }
        displayedColumns: string[] = ['index','examination date', 'doctor id', 'result'];
        idPatient!:number;
        idUser!:number;
        examinations!:Examination[];
        dataSource!:any;
        patientsOfUser!:patientDTO[];
        selectedValue!: patientDTO;
  @ViewChild(MatSort) sort!: MatSort;


ngOnInit(): void {
  
    this._acr.paramMap.subscribe(params => {
      var idParam = params.get("id");
      if (idParam!= undefined&&idParam!=null)
        this. idUser =(Number)(idParam);
      
    })
    this.patientService.getPatientsByUserId(this.idUser).subscribe(
      data=>{
      if (data)
      this.patientsOfUser=data;
      this.selectedValue=this.patientsOfUser[0];
     }

    )
    
    
    this.examService.getExamById(this.idPatient).subscribe(data => {
      if (data) {
      this.examinations=data;
       this.dataSource = new MatTableDataSource(this.examinations);
      }
    });
    
  }
  ngAfterViewInit() {
  // this.dataSource.sort = this.sort;
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
  
  
  












