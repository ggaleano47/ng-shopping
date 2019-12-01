import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import * as fromShop from './shop.reducer';

export interface State {
  shops: fromShop.State;
}

// AOT compatibility
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('ROOT_REDUCERS_TOKEN', {
  factory: () => ({
    shops: fromShop.reducers
  })
});
