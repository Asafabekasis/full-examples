import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {

    const filee = new File([file], "file_name", { type: file.type });
  
    let formData = new FormData();
    formData.append('file', filee, 'file.png');
  
    console.log(formData);
  
    const api = `${environment.api_url}/upload`;
    return this.http.post<any>(api, formData);
  
    }

  // upload(file: File): Observable<HttpEvent<any>> {

  // const filee = new File([file], "file_name", { type: file.type });

  // let formData = new FormData();
  // formData.append('file', file, 'file.png');

  // console.log(formData);
  

  // const api = `${environment.api_url}/upload`;
  // return this.http.post<any>(api, JSON.stringify(formData));

  // }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.api_url}/files`);
  }
}
