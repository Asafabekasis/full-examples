import {
  createAction,
  props,
  createActionGroup,
  emptyProps,
} from '@ngrx/store';

export const groupPageActions = createActionGroup({
  source: '[Main Component get products group action] products',
  events: {
    getProductsActionFromGroupAction: emptyProps(),
  },
});

export const getProductsAction = createAction(
  '[Main Component get products] products'
);
export const productsAction = createAction(
  '[main.effect follow Main Component get products] products',
  props<any>()
);
