import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from '../../main.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;

  constructor(
    private store: Store<any>,
  ) {
    this.products$ = store.select('products');
    this.store.dispatch(mainActions.getProductsAction());

  }

  ngOnInit(): void {

  }

}
