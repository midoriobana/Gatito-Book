import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGatitosComponent } from './lista-gatitos/lista-gatitos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaGatitosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatitosRoutingModule { }
