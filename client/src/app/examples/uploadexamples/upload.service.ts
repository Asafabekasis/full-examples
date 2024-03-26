import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  upload(file): Observable<HttpEvent<any>> {
    const api = `${environment.api_url}/upload`;    
    return this.http.post<any>(api, {file:file});
  }
}
