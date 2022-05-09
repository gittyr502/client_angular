
import { Component, OnInit, Input, NgZone } from '@angular/core';

import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExamService } from 'src/app/services/exam.service';
import { ImageSnippet } from 'src/app/models/imageSmippet.model';
import { Examination } from 'src/app/models/examinations.model';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-add-exan',
  templateUrl: './add-exan.component.html',
  styleUrls: ['./add-exan.component.css']
})
export class AddExanComponent implements OnInit {
  @Input()
  responses: Array<any>;

  private hasBaseDropZoneOver: boolean = false;
  private uploader: FileUploader;
  private title: string;
  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  examForm=new FormGroup({
    
  })
  selectedFile: any;
  constructor(private zone: NgZone, private http: HttpClient, private _examService:ExamService,
    private _pictureService:PictureService) {
    this.responses = [];
    this.title = '';
  }

  ngOnInit(): void {

 // Create the file uploader, wire it to upload to your account
  const uploaderOptions: FileUploaderOptions = {
    // url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
    url:`https://api.cloudinary.com/v1_1/CLOUD_NAME/upload`,
    // Upload files automatically upon addition to upload queue
    autoUpload: true,
    // Use xhrTransport in favor of iframeTransport
    isHTML5: true,
    // Calculate progress independently for each uploaded file
    removeAfterUpload: true,
    // XHR request headers
    headers: [
      {
        name: 'X-Requested-With',
        value: 'XMLHttpRequest'
      }
    ]
  };

  this.uploader = new FileUploader(uploaderOptions);

  this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    // Add Cloudinary unsigned upload preset to the upload form
    // form.append('upload_preset', this.cloudinary.config().upload_preset);
    form.append('upload_preset', 'PRESET_NAME');

    // Add file to upload
    form.append('file', fileItem);

    // Use default "withCredentials" value for CORS requests
    fileItem.withCredentials = false;
    return { fileItem, form };
  };
}



  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  onFileChange(event:any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.selectedFile = new ImageSnippet(file, event.target.result);

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }

  submit() {
    console.log(this.myForm.value);
    let exam = new Examination(1,1,new Date(),1,true,this.myForm.value.file,true,'a','a',1);
    //postImage.fileName = this.myForm.value.file;
    //postImage.binaryData = this.myForm.value.fileSource;

    this._pictureService.addImage(this.selectedFile)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
     //   this._examService.setReloadFlag(true);
      },
        error => {
          let errorMsg: string;
          //if (error.error instanceof ErrorEvent) {
          //  errorMsg = `שגיאה בשמירת תמונה: ${error.error.message}`;
          //} else {
          //  errorMsg = this.getServerErrorMessage(error);
          //}
          alert(error.error)
        });
  }
  //private getServerErrorMessage(error: HttpErrorResponse): string {
  //  switch (error.status) {
  //    case 404: {
  //      return `Not Found: ${error.message}`;
  //    }
  //    case 403: {
  //      return `Access Denied: ${error.message}`;
  //    }
  //    case 500: {
  //      return `Internal Server Error: ${error.message}`;
  //    }
  //    default: {
  //      return `Unknown Server Error: ${error.message}`;
  //    }

  //  }
  //}
}



