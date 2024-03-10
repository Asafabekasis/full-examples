import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //==========================================================================================================================>

  secretkey = 'exampleSecretKeySupportServerAndClient'

  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.secretkey).toString();
  }
  
  public decrypt(passwordToDecrypt: string) {
    return CryptoJS.AES.decrypt(passwordToDecrypt, this.secretkey).toString(CryptoJS.enc.Utf8);
  }

  public getDecrypt(){
    return this.http.get(`http://localhost:1000/getdecrypt`);
   }

   public postEncrypt(body) {
    return this.http.post('http://localhost:1000/postencrypt',body);
  }

  //==========================================================================================================================>

  public getProducts() {
   return this.http.get('http://localhost:1000/getproducts');
  }

  public getProductById(id) {
   return this.http.get(`http://localhost:1000/getproduct/${id}`);
  }

  // public saveProductsList(id,body) {
  //   return this.http.post(`http://localhost:1000/saveproductslist/${id}`,body);
  //  }

  public getCustomers() {
   return this.http.get('http://localhost:1000/getcustomers');
  }

  public getCustomerById(id) {
   return this.http.get(`http://localhost:1000/getcustomer/${id}`);
  }

  // public saveCustomersList(id,body) {
  //   return this.http.post(`http://localhost:1000/savecustomerslist/${id}`,body);
  //  }

  public postSomething(body) {
    return this.http.post('http://localhost:1000/postsomthing',body);
  }

  public deleteSomething(body) {
    return this.http.delete('http://localhost:1000/deletesomthing',body);
  }
} 
