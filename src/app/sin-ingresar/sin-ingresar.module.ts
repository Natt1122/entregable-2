import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinIngresarPageRoutingModule } from './sin-ingresar-routing.module';

import { SinIngresarPage } from './sin-ingresar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinIngresarPageRoutingModule
  ],
  declarations: [SinIngresarPage]
})
export class SinIngresarPageModule {}
