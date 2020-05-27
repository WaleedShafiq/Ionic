import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranemPageRoutingModule } from './tranem-routing.module';

import { TranemPage } from './tranem.page';
import { TranemItemComponent } from './tranem-item/tranem-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranemPageRoutingModule
  ],
  declarations: [TranemPage, TranemItemComponent]
})
export class TranemPageModule {}
