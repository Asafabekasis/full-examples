import {createReducer, on } from '@ngrx/store';
import {
  productsAction,
  addProductAction,
  productChangeActive,
  deleteProduct,
  groupPageActionsCounter,
} from './main.actions';
import { removeAt } from "./main.helpers";
import * as mainActions from './main.actions';

export const defaultProducts = [];
export const initialStateNumber = 0;

export const productsReducer = createReducer(
  defaultProducts,
  on(productsAction, (state, { payload }) => payload),
  on(productChangeActive, (state, { payload }) => state.map((value, index) => index === payload ? {...value, active: !value.active} : value)),
  on(addProductAction, (state, { payload }) => [...state, payload]),
  on(deleteProduct, (state, { payload }) => removeAt(state,payload))
);

export const counterReducer = createReducer(
  initialStateNumber,
      on(groupPageActionsCounter.incrementBlahBlah, (state) => state + 1),
      on(groupPageActionsCounter.decrement, (state) => state - 1),
      on(groupPageActionsCounter.reset, (state) => 0),
      //if payload i single parameter display it like that
      on(groupPageActionsCounter.increment10, (state,{payload}) => state + payload),
      //if payload is object display it like that
      on(groupPageActionsCounter.increment100, (state,payload) => state + payload.val1 + payload.val2),
      on(groupPageActionsCounter.increment1000, (state,payload) => state + payload.val1 + payload.val2[0].val),
  

  );



