import {
  createAction,
  props,
  createActionGroup,
  emptyProps,
} from '@ngrx/store';

export const groupPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    Example: emptyProps(),
  },
});

export const getProductsAction = createAction(
  '[Main Component get products] products'
);
export const productsAction = createAction(
  '[main.effect follow Main Component get products] products',
  props<any>()
);
