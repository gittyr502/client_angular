import { Component, Inject, Input, OnInit } from '@angular/core';
import { Examination } from 'src/app/models/examinations.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editExam',
  templateUrl: './editExam.component.html',
  styleUrls: ['./editExam.component.css'],
})
export class EditExamComponent implements OnInit {
  public _exam: Examination;
  exam:Examination[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) data: { exam: Examination }) {
    this._exam = data.exam;
  }
  ngOnInit() {
    debugger;
    console.log(this._exam);
  }
}
