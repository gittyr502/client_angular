import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-alert-false',
  templateUrl: './alert-false.component.html',
  styleUrls: ['./alert-false.component.css']
})
export class AlertFalseComponent implements OnInit {

  constructor(private _materialService:MaterialService) { }
whatAlert:string='';
  ngOnInit(): void {
    this.whatAlert=this._materialService.whatAlert;
  }

}
