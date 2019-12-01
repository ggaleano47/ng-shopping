import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { Shop } from '../shop';
import { ShopDataSource } from '../shop-datasource';

@Component({
  selector: 'app-shop-index',
  templateUrl: './shop-index.component.html',
  styleUrls: ['./shop-index.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopIndexComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() shopDataSource: ShopDataSource;
  @Output() updateShop = new EventEmitter<Shop>();
  @Output() deleteShop = new EventEmitter<string>();

  displayedColumns = ['favorite', 'name', 'address', 'actions'];
  dataSource: ShopDataSource;

  constructor() {}

  ngOnInit() {
    this.dataSource = this.shopDataSource;
    this.dataSource.loadShops();
  }

  updateFavorite(shop: Shop) {
    const updatedShop: Shop = {
      ...shop,
      favorite: !shop.favorite
    };
    this.updateShop.emit(updatedShop);
  }

  delete(shop: Shop) {
    this.deleteShop.emit(shop.id);
  }

  showIcon(favorite: boolean): string {
    return favorite ? 'star' : 'star_border';
  }
}
