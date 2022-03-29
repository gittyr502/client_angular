import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-exam2',
  templateUrl: './add-exam2.component.html',
  styleUrls: ['./add-exam2.component.css'],
  providers: [MessageService]
})
export class AddExam2Component {
    
    uploadedFiles: any[] = [];
    
    constructor(private messageService: MessageService) {}

    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }
    
    onBasicUpload(event:any) {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }
    
    onBasicUploadAuto(event:any) {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }
    
}




