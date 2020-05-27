import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranemDetailPageRoutingModule } from './tranem-detail-routing.module';

import { TranemDetailPage } from './tranem-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranemDetailPageRoutingModule
  ],
  declarations: [TranemDetailPage]
})
export class TranemDetailPageModule {}
