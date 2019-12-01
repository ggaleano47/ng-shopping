import { CollectionViewer, DataSource } from '@angular/cdk/collections';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { Shop } from './shop';
import { ShopsStoreFacade } from '../store/shop.store-facade';

export class ShopDataSource implements DataSource<Shop> {
  private shopsSubject = new BehaviorSubject<Shop[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private shopsFacade: ShopsStoreFacade) {}

  connect(collectionViewer: CollectionViewer): Observable<Shop[]> {
    return this.shopsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.shopsSubject.complete();
    this.loadingSubject.complete();
  }

  loadShops() {
    this.loadingSubject.next(true);

    this.shopsFacade.shops$
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(shops => this.shopsSubject.next(shops));
  }
}
