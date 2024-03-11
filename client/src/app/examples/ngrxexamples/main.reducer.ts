import {createReducer, on } from '@ngrx/store';
import {
  productsAction,
  addProductAction,
  productChangeActive,
  deleteProduct,
} from './main.actions';
import { removeAt } from "./main.helpers";
import * as mainActions from './main.actions';

export const defaultProducts = [];
export const defaultCustomers = [];
export const general = ''

export const productsReducer = createReducer(
  defaultProducts,
  on(productsAction, (state, { payload }) => payload),
  on(productChangeActive, (state, { payload }) => state.map((value, index) => index === payload ? {...value, active: !value.active} : value)),
  on(addProductAction, (state, { payload }) => [...state, payload]),
  on(deleteProduct, (state, { payload }) => removeAt(state,payload))
);



