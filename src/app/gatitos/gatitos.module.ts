import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatitosRoutingModule } from './gatitos-routing.module';
import { ListaGatitosComponent } from './lista-gatitos/lista-gatitos.component';


@NgModule({
  declarations: [
    ListaGatitosComponent
  ],
  imports: [
    CommonModule,
    GatitosRoutingModule
  ]
})
export class GatitosModule { }
