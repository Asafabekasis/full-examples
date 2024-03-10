import { Component, OnInit } from '@angular/core';
import { Subject, from, interval, map, switchMap } from 'rxjs';
import { customers, products } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-apiexamples',
  templateUrl: './apiexamples.component.html',
  styleUrls: ['./apiexamples.component.scss'],
})
export class ApiexamplesComponent implements OnInit {
  constructor(public _api: ApiService) {}

  //===============================================================================>

  public customers: customers[] = [];
  public products: products[] = [];
  public fromExample = from(this._api.getProducts());

  // ngOnInit(): void {
  //   this.fromExample.pipe(map((m)=>m.map((c)=>{return {...c,color:'red'}}))).subscribe({
  //         next: (v) => console.log('next', v),
  //         error: (e) => console.error('error', e),
  //         complete: () => console.info('complete'),
  //       }
  //   )
  // }

  ngOnInit(): void {
    // const a = new Subject();
    // setTimeout(() => {
    //   a.next('90');
    // }, 2000);
    // setTimeout(() => {
    //   a.error('ERROR!');
    // }, 4000);
    // setTimeout(() => {
    //   a.complete();
    // }, 6000);
    // a.subscribe({
    //   next: (v) => console.log('next', v),
    //   error: (e) => console.error('error', e),
    //   complete: () => console.info('complete')
    // })
    this._api.getCustomers().subscribe({
      next: (v) => console.log('next', v),
      error: (e) => console.error('aaaaaaaaaaaaaaaaaaaaaaa', e),
      complete: () => console.info('complete'),
    });

    this._api.getProducts().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
      },
      (err) => {
        console.log('this subscribe is depreced no next ');
      }
    );

    this._api.getSomething().subscribe(
      (res) => {
        console.log('something');
        console.log('something res',res);

      },
      (err) => {
        console.log('get something error');
      }
    );

    this._api.getProductsAndCustomersForkJoin().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('completed');
      },
    });
  }
}
