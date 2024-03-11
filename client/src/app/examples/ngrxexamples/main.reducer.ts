import { createReducer, on, createAction } from '@ngrx/store';
import {productsAction} from './main.actions';

export const defaultProducts = [];

export const productsReducer = createReducer(
  defaultProducts,
  on(productsAction, (state, { payload }) => payload)
);

