import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Examination } from 'src/app/models/examinations.model';
import { ExamService } from 'src/app/services/exam.service';
import { AddPatientComponent } from '../../user/add-patient/add-patient.component';
import { AddExanComponent } from '../add-exan/add-exan.component';
import { ExamModule } from '../exam.module';


@Component({
  selector: 'app-by-doctor-id',
  templateUrl: './by-doctor-id.component.html',
  styleUrls: ['./by-doctor-id.component.css']
})
export class ByDoctorIdComponent implements OnInit {


  constructor(private examService: ExamService, private _acr: ActivatedRoute, private route: Router, private dialog: MatDialog) { }
  displayedColumns: string[] = ['index', 'examination date', 'patient id', 'labyrinth_comments', 'labyrinth_diagnosis', 'result', 'doctor_comments'

    //  'send message to patient'
  ];
  idPatient!: number;
  examinations!: Examination[];
  dataSource!: any;
  links = ['exams', 'add user', 'add exam', 'discussion groups'];
  activeLink = this.links[0];
  doctorComments: string = "";

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {

    this._acr.paramMap.subscribe(params => {
      var idParam = params.get("id");
      if (idParam != undefined && idParam != null)
        this.idPatient = (Number)(idParam);

    })

    this.examService.getExamByDoctorId(this.idPatient).subscribe(data => {
      if (data) {
        debugger;
        this.examinations = data;
        this.dataSource = new MatTableDataSource(this.examinations);
      }
    });

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  navigator() {

    if (this.activeLink == 'add user') {
      this.addUser();
    }

   else if (this.activeLink == 'add exam') {
      this.addExam();
    }
    else this.route.navigate(['/' + this.activeLink]);
  }

  addUser(): void {
    const dialogRef = this.dialog.open(AddPatientComponent
  
    );
  }

  addExam(): void {
    const dialogRef = this.dialog.open(AddExanComponent
      , {
      width: '30%',
      height: '80%',
      data: {},
    }
    )
  }
}
