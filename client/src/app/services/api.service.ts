import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { products, customers } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(public http: HttpClient) {}

  //===============================================================================================================================>
  //=====Encrypt / Decrypt
  public getCrypt() {
    return this.http.get(`http://localhost:1000/getcrypt`);
  }

  public postCrypt(body) {
    return this.http.post('http://localhost:1000/postcrypt', body);
  }

  //===============================================================================================================================>

  public getProducts(): Observable<products[]> {
    return this.http.get<products[]>('http://localhost:1000/getproducts');
  }

  public getProductById(id) {
    return this.http.get(`http://localhost:1000/getproduct/${id}`);
  }

  // public saveProductsList(id,body) {
  //   return this.http.post(`http://localhost:1000/saveproductslist/${id}`,body);
  //  }

  public getCustomers(): Observable<customers[]> {
    return this.http.get<customers[]>('http://localhost:1000/getcustomers');
  }

  public getCustomerById(id) {
    return this.http.get(`http://localhost:1000/getcustomer/${id}`);
  }

  // public saveCustomersList(id,body) {
  //   return this.http.post(`http://localhost:1000/savecustomerslist/${id}`,body);
  //  }

  public getComplex() {
    return this.http.get(`http://localhost:1000/getcomplex`);
  }

  public postSomething(body) {
    return this.http.post('http://localhost:1000/postsomething', body);
  }

  public deleteSomething(body) {
    return this.http.delete('http://localhost:1000/deletesomthing', body);
  }

  public getProductsAndCustomersForkJoin() {
    let products = this.http.get<products[]>(
      'http://localhost:1000/getproducts'
    );
    let customers = this.http.get<customers[]>(
      'http://localhost:1000/getcustomers'
    );
    let both = [products, customers];
    return forkJoin(both);
  }

  public getSomething() {
    return this.http.get(`http://localhost:1000/getsomething`);
  }
}
