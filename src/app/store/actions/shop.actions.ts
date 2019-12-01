import { createAction, props } from '@ngrx/store';

import { Shop } from '../../shop/shop';

export const loadAll = createAction('[Shop] Load Shops');

export const loadAllSuccess = createAction(
  '[Shop] Load all success',
  props<{ shops: Shop[] }>()
);

export const create = createAction('[Shop] Create', props<{ shop: Shop }>());

export const createSuccess = createAction(
  '[Shop] Create success',
  props<{ shop: Shop }>()
);

export const update = createAction(
  '[Shop] Update',
  props<{ shop: Partial<Shop> }>()
);

export const updateSuccess = createAction(
  '[Shop] Update success',
  props<{ shop: Partial<Shop> }>()
);

export const remove = createAction('[Shop] Remove', props<{ id: string }>());

export const removeSuccess = createAction(
  '[Shop] Remove success',
  props<{ id: string }>()
);
