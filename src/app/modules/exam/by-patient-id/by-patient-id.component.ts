import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Examination } from 'src/app/models/examinations.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-by-patient-id',
  templateUrl: './by-patient-id.component.html',
  styleUrls: ['./by-patient-id.component.css']
})
export class ByPatientIdComponent implements OnInit {

  constructor(private examService:ExamService,private _acr: ActivatedRoute, ) { }
        displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
        idPatient!:number;
        examinations!:Examination[];
        dataSource!:any;

ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      var idParam = params.get("id");
      if (idParam!= undefined&&idParam!=null)
        this.idPatient =(Number)(idParam);
        alert("gjk")
      
    })

    console.log("aaa");
    this.examService.getExamById(this.idPatient).subscribe(data => {
      if (data) {
      this.examinations=data;
       this.dataSource = new MatTableDataSource(this.examinations);
      }
    });
    
  }
}
  
  
  












