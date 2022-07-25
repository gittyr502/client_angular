import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Examination } from 'src/app/models/examinations.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageSnippet } from 'src/app/models/image-snippet.model';
import { FormControl, FormGroup } from '@angular/forms';
import { PictureService } from 'src/app/services/picture.service';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-editExam',
  templateUrl: './editExam.component.html',
  styleUrls: ['./editExam.component.css'],
})
export class EditExamComponent implements OnInit {
  _imageSrc!: string;
  _selectedFile: any;
  imgPath!:string;
  public _exam: Examination;
  exam: Examination[] = [];
  form: FormGroup = new FormGroup({
    date: new FormControl(),
    uploadImage: new FormControl(),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { exam: Examination },
    private _examService: ExamService
  ) {
    this._exam = data.exam;
  }
  ngOnInit() {
    console.log(this._exam);
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    this.imgPath=event.currentTarget.files[0].name;

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this._selectedFile = new ImageSnippet(file, event.target.result);

        this._imageSrc = reader.result as string;
        debugger;

        // this.eventDetailsForm.patchValue({
        //   fileSource: reader.result
        // });
      };
    }
  }
  saveExam() {
    this._exam.linkToFile = this.imgPath;
    this._examService.updateExam(this._exam).subscribe(data => {
      if (data) {
      this.exam = data;
      alert("update exam succesfully")

      //  this.dataSource = new MatTableDataSource(this.examinations);
      }
      
    });
  }
}
// function ChildDirective(ChildDirective: any) {
//   throw new Error('Function not implemented.');
// }
