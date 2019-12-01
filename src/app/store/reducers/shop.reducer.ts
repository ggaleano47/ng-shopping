import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Shop } from '../../shop/shop';

import {
  loadAllSuccess,
  createSuccess,
  updateSuccess,
  removeSuccess
} from '../actions/shop.actions';

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Contact> {
//   ids: string[] | number[];
//   entities: { [id: string]: Contact };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

// ENTITY
export const shopsAdapter = createEntityAdapter<Shop>({
  selectId: (shop: Shop) => shop.id,
  sortComparer: false
});

export interface State extends EntityState<Shop> {
  // additional props here
}

export const INIT_STATE: State = shopsAdapter.getInitialState({
  // additional props default values here
});

export const shopReducer = createReducer(
  INIT_STATE,
  on(loadAllSuccess, (state, { shops }) => shopsAdapter.addAll(shops, state)),
  on(createSuccess, (state, { shop }) => shopsAdapter.addOne(shop, state)),
  on(updateSuccess, (state, { shop }) =>
    shopsAdapter.updateOne({ id: shop.id, changes: shop }, state)
  ),
  on(removeSuccess, (state, { id }) => shopsAdapter.removeOne(id, state))
);

/** Provide reducers with AoT-compilation compliance */
export function reducers(state: State | undefined, action: Action) {
  return shopReducer(state, action);
}

// SELECTORS

export const getShopsState = createFeatureSelector<State>('shops');

export const { selectAll: getAllShops } = shopsAdapter.getSelectors(
  getShopsState
);
