import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'gatitos',
    loadChildren: ()=> import('./gatitos/gatitos.module').then(m => m.GatitosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
