import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarmercanciaPageRoutingModule } from './mostrarmercancia-routing.module';

import { MostrarmercanciaPage } from './mostrarmercancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarmercanciaPageRoutingModule
  ],
  declarations: [MostrarmercanciaPage]
})
export class MostrarmercanciaPageModule {}
