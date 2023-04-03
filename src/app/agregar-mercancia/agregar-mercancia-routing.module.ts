import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMercanciaPage } from './agregar-mercancia.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMercanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMercanciaPageRoutingModule {}
