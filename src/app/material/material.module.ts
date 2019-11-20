import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatTabsModule, MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
