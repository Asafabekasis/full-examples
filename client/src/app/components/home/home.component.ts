import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public _api: ApiService) {}

  //npm i --save-dev @types/crypto-js
  encrypt = '';
  decripted = '';
  private password = 'examplePasswordFromClient1234!';
  private key = 'exampleSecretKeySupportServerAndClient';
  decryptRespond: any = { password: '' };

  ngOnInit(): void {
    this.encrypt = CryptoJS.AES.encrypt(this.password, this.key).toString();

    this._api.postCrypt({ password: this.encrypt }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });

    this._api.getCrypt().subscribe((res) => {
      this.decryptRespond = res;
      console.log('password Before Decrypt:::', this.decryptRespond.password);
      this.decripted = CryptoJS.AES.decrypt(
        this.decryptRespond.password,
        this.key
      ).toString(CryptoJS.enc.Utf8);
      console.log('password After Decrypt:::', this.decripted);
    });
  }
}
