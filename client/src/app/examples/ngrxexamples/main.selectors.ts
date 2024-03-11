import { createFeatureSelector, createSelector } from "@ngrx/store";
import { products } from "src/app/interfaces";

export const selectProductsState = createFeatureSelector<products>('products');
// export const selectProductsList = createSelector(selectProductsState, (state: Array<products>) => [...state,{customerName:'created in selector'}] );

