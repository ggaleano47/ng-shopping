import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadAll,
  loadAllSuccess,
  create,
  createSuccess,
  update,
  updateSuccess,
  remove,
  removeSuccess
} from '../actions/shop.actions';
import { exhaustMap, map, pluck, startWith, switchMap } from 'rxjs/operators';
import { ShopService } from '../../shop/shop.service';
import { Shop } from '../../shop/shop';

/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

@Injectable()
export class ShopEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      startWith(loadAll()),
      switchMap(() =>
        this.shopsService.index().pipe(map(shops => loadAllSuccess({ shops })))
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(create),
      pluck('shop'),
      switchMap((shop: Shop) => {
        return this.shopsService
          .create(shop)
          .pipe(map(_ => createSuccess({ shop })));
      })
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(update),
      pluck('shop'),
      exhaustMap(shop =>
        this.shopsService.update(shop).pipe(map(_ => updateSuccess({ shop })))
      )
    )
  );

  destroy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(remove),
      pluck('id'),
      switchMap((id: string) =>
        this.shopsService.destroy(id).pipe(map(_ => removeSuccess({ id })))
      )
    )
  );

  constructor(private actions$: Actions, private shopsService: ShopService) {}
}
