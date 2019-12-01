import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Shop } from './shop';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class ShopService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}

  index(): Observable<Shop[]> {
    return this.db.collection<Shop>('shops').valueChanges();
  }

  create(shop: Shop): Observable<Shop> {
    const ref = this.db
      .collection<Shop>('shops')
      .doc(shop.id)
      .set(shop);
    return from(ref).pipe(map(_ => shop));
  }

  update(shop: Partial<Shop>): Observable<Partial<Shop>> {
    const ref = this.db
      .collection<Shop>('shops')
      .doc(shop.id)
      .update(shop);
    return from(ref).pipe(map(_ => shop));
  }

  destroy(id: string): Observable<string> {
    const ref = this.db
      .collection<Shop>('shops')
      .doc(id)
      .delete();
    return from(ref).pipe(map(_ => id));
  }
}
