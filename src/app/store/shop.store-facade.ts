import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromShop from '../store/reducers/shop.reducer';
import { create, update, remove } from './actions/shop.actions';
import { Shop } from '../shop/shop';

@Injectable()
export class ShopsStoreFacade {
  shops$ = this.store.pipe(select(fromShop.getAllShops));

  create(shop: Shop) {
    this.store.dispatch(create({ shop }));
  }

  update(shop: Partial<Shop>) {
    this.store.dispatch(update({ shop }));
  }

  delete(id: string) {
    this.store.dispatch(remove({ id }));
  }

  constructor(private store: Store<fromShop.State>) {}
}
