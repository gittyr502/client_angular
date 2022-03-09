import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Examination } from 'src/app/models/examinations.model';
import { ExamService } from 'src/app/services/exam.service';




export interface PeriodicElement {
  
}


@Component({
  selector: 'app-by-lab-id',
  templateUrl: './by-lab-id.component.html',
  styleUrls: ['./by-lab-id.component.css']
})

export class ByLabIdComponent implements OnInit {

  id!:  number;
  examDate!: Date;
  computerDiagnosis!: boolean;
  computerComments!: string;
  probability!:number;
  linkToPicture!:string;

  examinations!:Examination[];
  dataSource!:any;
  
  displayedColumns: string[] = ['index', 'examDate', 'computerDiagnosis', 'computerComments','probability','linkToPicture'];
  

  constructor(private examService:ExamService) { 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {



    this.examService.getExamsLab(this.id).subscribe(data => {
      if (data) {
      this.examinations=data;
       this.dataSource = new MatTableDataSource(this.examinations);
      }
    });
  }

}

