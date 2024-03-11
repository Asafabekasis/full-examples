import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encryptdecrypt',
  templateUrl: './encryptdecrypt.component.html',
  styleUrls: ['./encryptdecrypt.component.scss']
})
export class EncryptdecryptComponent implements OnInit {

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
