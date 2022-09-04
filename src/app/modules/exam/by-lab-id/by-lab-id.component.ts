import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Examination } from 'src/app/models/examinations.model';
import { ExamService } from 'src/app/services/exam.service';
import { EditExamComponent } from './editExam/editExam.component';

export interface PeriodicElement {}

@Component({
  selector: 'app-by-lab-id',
  templateUrl: './by-lab-id.component.html',
  styleUrls: ['./by-lab-id.component.css'],
})
export class ByLabIdComponent implements OnInit {
  id!: number;
  examDate!: Date;
  computerDiagnosis!: boolean;
  computerComments!: string;
  probability!: number;
  linkToPicture!: string;

  examinations!: Examination[];
  dataSource!: any;

  displayedColumns: string[] = [
    'index',
    'examDate',
    'doctorName',
    'doctorComments',
    'edit',
  ];

  constructor(
    private examService: ExamService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getValue(key: number): string {
    let result: string;
    this.examService
      .getDoctorNameByDoctorId(key)
      .subscribe((res) => (result = res));
    return result;
  }

  ngOnInit(): void {
    this.examService.getExamsLab(this.id).subscribe((data) => {
      if (data) {
        this.examinations = data;
        this.examinations.forEach((el) => {
          el.doctorId = el.doctorId;
        });
        this.dataSource = new MatTableDataSource(this.examinations);
      }
    });
  }

  addExam(): void {
    debugger;
    this.router.navigate(['/addExam']);
  }
  addFile() {}

  editExam(examination: Examination): void {
    const dialogRef = this.dialog.open(EditExamComponent, {
      data: { exam: examination },
    });
  }
}
