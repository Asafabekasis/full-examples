import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectProductsState = createFeatureSelector<number>('products');
export const selectProductsList = createSelector(selectProductsState, (state: number) => state );
