import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from './main.actions';

@Component({
  selector: 'app-ngrxexamples',
  templateUrl: './ngrxexamples.component.html',
  styleUrls: ['./ngrxexamples.component.scss'],
})
export class NgrxexamplesComponent implements OnInit {

  products$: Observable<any>;

  constructor(
    private store: Store<any>,
  ) {
    this.products$ = store.select('products');
  }

  ngOnInit(): void {
    this.store.dispatch(mainActions.getProductsAction());
    console.log(this.products$);
    this.products$.subscribe(
      res=>{
        console.log(res);
        
      }
    )
    

  }

}
