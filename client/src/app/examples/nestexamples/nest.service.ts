import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class NestService {
  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get(environment.api_url3000 + '/getproducts');
  }
}
