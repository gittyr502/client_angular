import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-alert-true',
  templateUrl: './alert-true.component.html',
  styleUrls: ['./alert-true.component.css']
})
export class AlertTrueComponent implements OnInit {

  constructor(private _examService:ExamService) { }
 whatAlert:string='';
  ngOnInit(): void {
   
  }
 

}
