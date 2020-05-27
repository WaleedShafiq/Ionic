import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tranem',
    pathMatch: 'full'
  },
  {
    path: 'tranem',
    children: [
      {
      path: '',
      loadChildren: () => import('./tranem/tranem.module').then( m => m.TranemPageModule)
      },
      {
        path: ':tranemaId',
      loadChildren: () => import('./tranem/tranem-detail/tranem-detail.module').then( m => m.TranemDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
