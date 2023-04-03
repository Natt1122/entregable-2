import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarmercanciaPage } from './mostrarmercancia.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarmercanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarmercanciaPageRoutingModule {}
