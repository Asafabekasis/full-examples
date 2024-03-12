import { createFeatureSelector, createSelector } from "@ngrx/store";
import { products } from "src/app/interfaces";

export const selectProductsState = createFeatureSelector<any>('products');
export const selectProductsList = createSelector(selectProductsState, (state) => [...state.filter(ob=>ob.price<5) ,{productName:'created in selector'}] );

export const selectCountState = createFeatureSelector<number>('count');
