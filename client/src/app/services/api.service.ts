import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { products, customers } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //===============================================================================================================================>
  //=====Encrypt / Decrypt
  public getCrypt() {
    return this.http.get(environment.api_url + '/getcrypt');
  }

  public postCrypt(body) {
    return this.http.post(environment.api_url + '/postcrypt', body);
  }

  //===============================================================================================================================>

  public getProducts(): Observable<products[]> {
    return this.http.get<products[]>(environment.api_url + '/getproducts');
  }

  public getProductById(id) {
    return this.http.get(environment.api_url + `/getproduct/${id}`);
  }

  // public saveProductsList(id,body) {
  //   return this.http.post(environment.api_url+`/saveproductslist/${id}`,body);
  //  }

  public getCustomers(): Observable<customers[]> {
    return this.http.get<customers[]>(environment.api_url + `/getcustomers`);
  }

  public getCustomerById(id) {
    return this.http.get(environment.api_url + `/getcustomer/${id}`);
  }

  // public saveCustomersList(id,body) {
  //   return this.http.post(environment.api_url+`/savecustomerslist/${id}`,body);
  //  }

  public getComplex() {
    return this.http.get(environment.api_url + `/getcomplex`);
  }

  public getProductsAndCustomersForkJoin() {
    let products = this.http.get<products[]>(
      environment.api_url + `/getproducts`
    );
    let customers = this.http.get<customers[]>(
      environment.api_url + `/getcustomers`
    );
    let both = [products, customers];
    return forkJoin(both);
  }

  public getSomething() {
    return this.http.get(environment.api_url + `/getsomething`);
  }

  public postSomething(body) {
    return this.http.post(environment.api_url + `/postsomething`, body);
  }

  public deleteSomething(body) {
    return this.http.delete(environment.api_url + `/deletesomthing`, body);
  }

  //=====NGRX HANDLING=====>

  getAllProducts() {
    return this.http.get(environment.api_url + '/getbasicproducts');
  }

  add(body: any,target) {
    body = {body:body,target:target}
    return this.http.post(
      environment.api_url + '/writenewany',
      JSON.stringify(body),
      {
        headers: { 'Content-type': 'application/json' },
        responseType: 'text',
      }
    );
  }

  getAnyNew(type) {
    console.log('service',type);
    return this.http.get(environment.api_url + '/getnewany/'+type);
  }

  deleteAny(body) {
    return this.http.post(
      environment.api_url + '/deleteany',
      JSON.stringify(body),
      {
        headers: { 'Content-type': 'application/json' },
        responseType: 'text',
      }
    );
  }
}
