import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinIngresarPage } from './sin-ingresar.page';

const routes: Routes = [
  {
    path: '',
    component: SinIngresarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinIngresarPageRoutingModule {}
