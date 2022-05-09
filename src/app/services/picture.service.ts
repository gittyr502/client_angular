import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  baseURL='/api/Pictures/';
  constructor(private _http: HttpClient) { }

  addImage(img:any):Observable<any>{
    const formData = new FormData();

    formData.append('image', img.file);
    return this._http.post<any>(this.baseURL+'SaveImage',formData);
  }
}
