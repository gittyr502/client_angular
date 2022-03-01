import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Examination } from 'src/app/models/examinations.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-by-doctor-id',
  templateUrl: './by-doctor-id.component.html',
  styleUrls: ['./by-doctor-id.component.css']
})
export class ByDoctorIdComponent implements OnInit {

  constructor(private examService:ExamService,private _acr: ActivatedRoute, ) { }
        displayedColumns: string[] = ['index','examination date', 'patient id','btn-edit','labyrinth_comments','labyrinth_diagnosis','doctor_comments', 'result'];
        idPatient!:number;
        examinations!:Examination[];
        dataSource!:any;
  @ViewChild(MatSort) sort!: MatSort;

ngOnInit(): void {
  
    this._acr.paramMap.subscribe(params => {
      var idParam = params.get("id");
      if (idParam!= undefined&&idParam!=null)
        this.idPatient =(Number)(idParam);
      
    })
    this.examService.getExamByDoctorId(this.idPatient).subscribe(data => {
      if (data) {
      this.examinations=data;
       this.dataSource = new MatTableDataSource(this.examinations);
      }
    });
    
  }
  ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
