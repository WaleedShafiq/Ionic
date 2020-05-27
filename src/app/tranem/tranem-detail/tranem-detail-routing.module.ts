import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranemDetailPage } from './tranem-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TranemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranemDetailPageRoutingModule {}
