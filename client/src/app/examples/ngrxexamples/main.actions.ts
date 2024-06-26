import { createAction, props, createActionGroup, emptyProps } from '@ngrx/store';

// export const ProductsPageActions = createActionGroup({
//   source: 'Products Page',
//   events: {
//    // defining an event without payload using the `emptyProps` function
//     'Opened': emptyProps(),

//     // defining an event with payload using the `props` function
//     'Pagination Changed': props<{ page: number; offset: number }>(),

//     // defining an event with payload using the props factory
//     'Query Changed': (query: string) => ({ query }),
//   },
// });

export const groupPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Example': emptyProps()
  },
});

export const getProductsAction = createAction(
  '[Main Component get products] products'
);
export const productsAction = createAction(
  '[main.effect follow Main Component get products] products',
  props<any>()
);
export const addProductEffect = createAction(
  '[Main Component put default product',
  props<any>()
);
export const addProductAction = createAction(
  'main.effect follow Main Component put default product',
  props<any>()
);

export const productChangeActive = createAction(
    'Change Product Active',
    props<any>()
  );

export const deleteProduct = createAction(
  'Delete Product Active',
    props<any>()
);

//============================================================================================================================>

export const getAnyEffect = createAction(
  'Get Type',
    props<any>()
);

export const deleteEffect = createAction(
  'deleteEffect',
    props<any>()
);

//============================================================================================================================>

export const groupPageActionsCounter = createActionGroup({
  source: 'Products Page',
  events: {
    'Reset': emptyProps(),
    'Increment Blah Blah': emptyProps(),
    'Decrement': emptyProps(),
    'Increment10': props<{payload:number}>(),
    //val1 and val2 MUST be equal in there names in the same function we are sending them from
    'Increment100': props<{val1:number,val2:number}>(),
    'Increment1000': props<{val1:number,val2:Array<any>}>()

  },
});


