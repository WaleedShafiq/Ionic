import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranemPage } from './tranem.page';

const routes: Routes = [
  {
    path: '',
    component: TranemPage
  },
  {
    path: 'tranem-detail',
    loadChildren: () => import('./tranem-detail/tranem-detail.module').then( m => m.TranemDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranemPageRoutingModule {}
