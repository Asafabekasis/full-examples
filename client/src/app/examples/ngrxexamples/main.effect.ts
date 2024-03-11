import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import * as mainActions from './main.actions';
import { ApiService } from 'src/app/services/api.service';
@Injectable()
export class MainEffects {
  constructor(private actions$: Actions, private _api: ApiService) {}

  //===============================================================================================================>

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.getProductsAction),
      tap(() => {
        console.log('new getproducts occurred in queue (Single, No Group)');
      }),
      exhaustMap(() =>
        this._api.getProducts().pipe(
          map((products) => mainActions.productsAction({ payload: products })),
          tap((products) => {
            console.log('products request (single)',products);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadProductsFromGroup$ = createEffect(() =>
  this.actions$.pipe(
    ofType(mainActions.groupPageActions.getproductsactionfromgroupaction),
    tap(() => {
      console.log('new groupPageActions getproducts occurred in queue');
    }),
    exhaustMap(() =>
      this._api.getProducts().pipe(
        map((products) => mainActions.productsAction({ payload: products })),
        tap((products) => {
          console.log('products from group action',products);
        }),
        catchError(() => EMPTY)
      )
    )
  )
);

//===============================================================================================================>
}


