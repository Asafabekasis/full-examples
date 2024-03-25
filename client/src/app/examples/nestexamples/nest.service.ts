import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NestService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(environment.api_url3000 + '/users');
  }
}
