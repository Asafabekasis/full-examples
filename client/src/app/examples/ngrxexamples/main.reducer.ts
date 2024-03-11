import { createFeatureSelector, createReducer, createSelector, on,createAction } from '@ngrx/store';
import {
  productsAction,
  addProductAction,
  customersAction,
  productChangeActive,
  customerChangeActive,
  deleteProduct,
  addCustomerEffect,
  addCustomerAction,
  deleteCustomer,
  groupPageActions,
  groupPageActionsCounter,
  decrement2,
  reset2
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

export const customersReducer = createReducer(
  defaultCustomers,
  on(customersAction, (state, { payload }) => payload),
  on(customerChangeActive, (state, { payload }) => changeActive(state,payload)),
  on(addCustomerAction, (state, { payload }) => [...state, payload]),
  on(deleteCustomer, (state, { payload }) => removeAt(state,payload))
  // on(deleteCustomer, (state, { payload }) => state.filter((ob,index)=>ob[index] !==payload))
  //on(deleteCustomer, (state, { payload }) =>  [...state.slice(0, payload),  ...state.slice(payload + 1)])

);

export const generalReducer = createReducer(
  general,
  on(mainActions.groupPageActions.example, (state) => state = 'blahblahblahhhh' ),
  
);

const changeActive = (state,payload)=>{
  // let x  = state.map((value, indexx) => indexx === payload ? {...value, active: !value.active} : value)
  // let newSource  = JSON.parse(JSON.stringify(state))
  // newSource[index].active = !newSource[index].active
  
  // return newSource
  return state.map((value, indexx) => indexx === payload ? {...value, active: !value.active} : value)
}
// changeActive(state,payload) productChangeActive
//state.map((value, index) => index === payload ? {...value, active: !value.active} : value)

// mutableOn(onAction, (state, action) => {
//   state.arr[action.index].name = action.name
//   return state
// })

// export interface CounterState {
//   counter1: number;
//   counter2: number;
//   name: string;
// }

// export const initialState: CounterState = {
//   counter1: 0,
//   counter2: 0,
//   name: "Something"
// };

// const featureSelector = createFeatureSelector<any>("count");

// export const getRawTotal = createSelector(
//   featureSelector,
//   s => {
//     return s.counter1 + s.counter2;
//   }
// );

export const initialStateNumber = 0
//can serve any reducer with number

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

export const counter2Reducer = createReducer(
    initialStateNumber,
    on(createAction('[Counter Component] Increment2'), (state) => state + 1),
    on(decrement2, (state) => state - 1),
    on(reset2, (state) => 0)
  );
