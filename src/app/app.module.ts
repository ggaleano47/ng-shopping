import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewShopComponent } from './shop/new-shop/new-shop.component';
import { ShopIndexComponent } from './shop/shop-index/shop-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/effects/shop.effects';
import { ShopsStoreFacade } from './store/shop.store-facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ShopService } from './shop/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NewShopComponent,
    ShopIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([ShopEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ShopService, ShopsStoreFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
