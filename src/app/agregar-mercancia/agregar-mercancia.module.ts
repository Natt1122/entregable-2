import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarMercanciaPageRoutingModule } from './agregar-mercancia-routing.module';

import { AgregarMercanciaPage } from './agregar-mercancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMercanciaPageRoutingModule
  ],
  declarations: [AgregarMercanciaPage]
})
export class AgregarMercanciaPageModule {}
