import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import * as mainActions from './main.actions';
@Injectable()
export class MainEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  //===============================================================================================================>

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.getProductsAction),
      tap(() => {
        console.log('new getproducts occurred in queue');
      }),
      exhaustMap(() =>
        this.apiService.getAllProducts().pipe(
          map((products) => mainActions.productsAction({ payload: products })),
          tap((products) => {
            console.log(products);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.addProductEffect),
      tap(() => {
        // console.log('new product occurred in queue');
      }),
      map((action) => action.payload),
      tap((action) => {
        // console.log(action);
      }),
      mergeMap((product) =>
        this.apiService.add(product,'products').pipe(
          map((res) => mainActions.addProductAction({ payload: product })),
          catchError((error) => EMPTY)
        )
      )
    )
  );

//===============================================================================================================>

loadAny$ = createEffect(() =>
this.actions$.pipe(
  ofType(mainActions.getAnyEffect),
  tap(() => {
    // console.log('new product occurred in queue');
  }),
  map((action) => action.payload),
  tap((action) => {
    console.log(action);
  }),
  mergeMap((type) =>
    this.apiService.getAnyNew(type).pipe(
      map((res) => type==='customers'?'':mainActions.productsAction({ payload:res})),
      catchError((error) => EMPTY)
    )
  )
)
);

deleteAny$ = createEffect(() =>
this.actions$.pipe(
  ofType(mainActions.deleteEffect),
  tap(() => {
    // console.log('new product occurred in queue');
  }),
  map((action) => action.payload),
  tap((action) => {
    console.log(action); 
  }),
  mergeMap((action) =>
    this.apiService.deleteAny(action).pipe(
      map((res) => action.type ==='customers'?'':mainActions.deleteProduct({ payload:action.i})),
      catchError((error) => EMPTY)
    )
  )
)
);

///////////////////////////////////////////////////////
}


