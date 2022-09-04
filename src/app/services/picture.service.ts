import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageSnippet } from '../models/image-snippet.model';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  // baseURL='/api/Pictures/';
  // constructor(private _http: HttpClient) { }

  // addImage(img:any):Observable<any>{
  //   const formData = new FormData();

  //   formData.append('image', img.file);
  //   return this._http.post<any>(this.baseURL+'SaveImage',formData);
  // }
  _prefix!: string;
  _reloadFlag!: BehaviorSubject<boolean>;
  _reloadFlag$!: Observable<boolean>;
  constructor(private http: HttpClient) {
    // this._prefix = baseUrl + 'api/Event/';
    this._reloadFlag = new BehaviorSubject<boolean>(false);
    this._reloadFlag$ = this._reloadFlag.asObservable();
  }
  // getEvent(id: number): Observable<any> {
  //   return this.http.get<any>("api/Event/" + id);
  // }
  // sendEmailToGuest(g: Guest): Observable<Guest> {
  //   console.log("sendEmailToGuest");
  //   debugger;
  //   return this.http.put<Guest>("api/Guest/", g);

  // }

  getEventListByUserId(i?: number): Observable<Event[]> {
    return this.http.get<Event[]>('/api/Event/User/' + i);
  }

  postImage(_imageSrc: ImageSnippet, eId?: number) {
    const formData = new FormData();
    formData.append('image', _imageSrc.file);
    debugger;
    return this.http.post<number>('/api/Event/image/' + eId, formData);
  }
  postEvent(e: Event, uId?: number): Observable<number> {
    return this.http.post<number>('/api/Event/' + uId, e);
  }
}
