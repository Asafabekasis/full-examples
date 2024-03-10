import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public _api: ApiService) {}

  encrypt = '';
  decripted = '';
  private password = 'examplePasswordFromClient1234!';
  decryptRespond: any = { password: '' };

  ngOnInit(): void {
    this.encrypt = this._api.encrypt(this.password);

    this._api.postEncrypt({ password: this.encrypt }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete post');
      },
    });

    this._api.getDecrypt().subscribe((res) => {
      this.decryptRespond = res;
      console.log('password Before Decrypt:::', this.decryptRespond.password);
      this.decripted = this._api.decrypt(this.decryptRespond.password);
      console.log('password After Decrypt:::', this.decryptRespond.password);
    });
  }
}
