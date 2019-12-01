import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Shop } from './shop';
import { ShopDataSource } from './shop-datasource';
import { ShopsStoreFacade } from '../store/shop.store-facade';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit {
  shopDataSource: ShopDataSource;

  shops$ = this.shopsFacade.shops$;

  constructor(private shopsFacade: ShopsStoreFacade) {}

  ngOnInit() {
    this.shopDataSource = new ShopDataSource(this.shopsFacade);
  }

  createShop(shop: Shop) {
    this.shopsFacade.create(shop);
  }

  updateShop(shop: Partial<Shop>) {
    this.shopsFacade.update(shop);
  }

  deleteShop(id: string) {
    this.shopsFacade.delete(id);
  }
}
